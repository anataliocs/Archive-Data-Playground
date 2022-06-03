import React, {useEffect} from 'react';
import {Button, Col, Row, Form, ButtonGroup, ListGroup, ListGroupItem} from 'reactstrap';
import {ValidatedField} from 'react-jhipster';
import {useForm} from 'react-hook-form';

import {useAppDispatch, useAppSelector} from 'app/config/store';
import {GetBlockByNumberResponse, GetBlockByNumberResult, getInfura} from "app/modules/infura/infura.reducer";


export const InfuraPage = () => {
  const dispatch = useAppDispatch();
  const block: GetBlockByNumberResponse = useAppSelector(state => state.infura.block);
  const blockResult: GetBlockByNumberResult = block.result;

  const {
    formState: {errors, touchedFields},
  } = useForm({mode: 'onTouched'});

  const handleBlockByNumberSubmit = (event) => {
    event.preventDefault();
    dispatch(getInfura(event.target[0].value));
  };

  const buttonHandleBlockByNumber = (blockNumber: string) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      dispatch(getInfura(blockNumber));
    };

  return (
    <Row>
      <Col md="9">
        <h2>Ethereum Archive Data Explorer</h2>

        <p className="lead">Explore historical Ethereum Data</p>
        <Form onSubmit={handleBlockByNumberSubmit}>

          <ValidatedField
            name="blockNumber"
            label="Block Number(Hexadecimal)"
            placeholder="Block Number in Hexadecimal i.e. 0x5BAD55"
            required
            autoFocus
            data-cy="blockNumber"
            validate={{required: 'Block Number cannot be empty!'}}
            error={errors.blockNumber}
            isTouched={touchedFields.blockNumber}
          />

          <Button color="primary" type="submit" data-cy="submit">
            Search
          </Button><br/>

        </Form>

        <br/>
        <p className="lead">Famous Blocks in Ethereum History!</p>

        <ButtonGroup aria-label="Basic example">

          <Button color="primary" onClick={buttonHandleBlockByNumber("0x0")}>
            Genesis(0)
          </Button>

          <Button color="secondary" onClick={buttonHandleBlockByNumber("0x30D40")}>
            Frontier Thawing(200000)
          </Button>

          <Button color="info" onClick={buttonHandleBlockByNumber("0x118C30")}>
            Homestead(1150000)
          </Button>

          <Button color="light" onClick={buttonHandleBlockByNumber("0x1D4C00")}>
            DAO Fork(1920000)
          </Button>

          <Button color="warning" onClick={buttonHandleBlockByNumber("0x259518")}>
            Tangerine Whistle(2463000)
          </Button>

          <Button color="danger" onClick={buttonHandleBlockByNumber("0x28D138")}>
            Spurious Dragon(2675000)
          </Button>

        </ButtonGroup>

        <br/>
        <hr/>
        <h3>Block Data </h3>

        {block ? (

          <ListGroup>
            <ListGroupItem>JSON RPC Version: {block.jsonrpc}</ListGroupItem>
            <ListGroupItem>Id: {block.id}</ListGroupItem>
            {blockResult ? (
              <>
                <ListGroupItem>Difficulty: {blockResult.difficulty}</ListGroupItem>
                <ListGroupItem>Gas Limit: {blockResult.gasLimit}</ListGroupItem>
                <ListGroupItem>Gas Used: {blockResult.gasUsed}</ListGroupItem>
                <ListGroupItem>Hash: {blockResult.hash}</ListGroupItem>
                <ListGroupItem>Miner: {blockResult.miner}</ListGroupItem>
                <ListGroupItem>Nonce: {blockResult.nonce}</ListGroupItem>
                <ListGroupItem>Parent Hash: {blockResult.parentHash}</ListGroupItem>
                <ListGroupItem>Receipts Root: {blockResult.receiptsRoot}</ListGroupItem>
                <ListGroupItem>Receipts Root: {blockResult.receiptsRoot}</ListGroupItem>
                <ListGroupItem>Sha3 Uncles: {blockResult.sha3Uncles}</ListGroupItem>
                <ListGroupItem>Size: {blockResult.size}</ListGroupItem>
                <ListGroupItem>State Root: {blockResult.stateRoot}</ListGroupItem>
                <ListGroupItem>Timestamp: {blockResult.timestamp}</ListGroupItem>
                <ListGroupItem>Total Difficulty: {blockResult.totalDifficulty}</ListGroupItem>
                <ListGroupItem># of transactions: {blockResult.transactions.length}</ListGroupItem>
              </>
            ) : <div>No block data</div>
            }
          </ListGroup>
        ) : <div></div>
        }
      </Col>
    </Row>
  );
};

export default InfuraPage;
