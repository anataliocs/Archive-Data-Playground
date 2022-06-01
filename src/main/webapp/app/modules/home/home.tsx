import './home.scss';

import {ValidatedField} from 'react-jhipster';
import React from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {Button, Row, Col, Alert, Form} from 'reactstrap';

import {useAppDispatch, useAppSelector} from 'app/config/store';
import {getInfura} from "app/modules/infura/infura.reducer";

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);
  const dispatch = useAppDispatch();

  const {
    formState: {errors, touchedFields},
  } = useForm({mode: 'onTouched'});

  const handleBlockByNumberSubmit = (blockNumber) => {
    dispatch(getInfura(blockNumber));
  };

  return (
    <Row>
      <Col md="9">

        <Link to="/infura"><h2>Ethereum Archive Data Explorer</h2></Link>

        <br/>
        {account?.login ? (
          <div>
            <Alert color="success">You are logged in as user {account.login}.</Alert>
          </div>
        ) : (
          <div>
            <Alert color="warning">
              If you want to
              <span>&nbsp;</span>
              <Link to="/login" className="alert-link">
                {' '}
                sign in
              </Link>
              , you can try the default accounts:
              <br/>- Administrator (login=&quot;admin&quot; and password=&quot;admin&quot;)
              <br/>- User (login=&quot;user&quot; and password=&quot;user&quot;).
            </Alert>

            <Alert color="warning">
              You do not have an account yet?&nbsp;
              <Link to="/account/register" className="alert-link">
                Register a new account
              </Link>
            </Alert>
          </div>
        )}

      </Col>
    </Row>
  );
};

export default Home;
