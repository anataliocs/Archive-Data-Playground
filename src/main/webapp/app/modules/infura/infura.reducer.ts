import axios, {AxiosResponse} from 'axios';
import {Storage} from 'react-jhipster';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {serializeAxiosError} from '../../shared/reducers/reducer.utils';

import {AppThunk} from 'app/config/store';
import {PasswordState, savePassword} from "app/modules/account/password/password.reducer";
import {ApplicationProfileState, getProfile} from "app/shared/reducers/application-profile";
import {PasswordResetSlice} from "app/modules/account/password-reset/password-reset.reducer";

const initialState = {
  block: {}
};

export type InfuraState = Readonly<typeof initialState>;

export interface GetBlockByNumberResponse {
  jsonrpc: string;
  id: string;
  result: GetBlockByNumberResult;
}

export interface GetBlockByNumberResult {
  difficulty: string;
  extraData: string;
  gasLimit: string;
  gasUsed: string;
  hash: string;
  logsBloom: string;
  miner: string;
  mixHash: string;
  nonce: string;
  number: string;
  parentHash: string;
  receiptsRoot: string;
  sha3Uncles: string;
  size: string;
  stateRoot: string;
  timestamp: string;
  totalDifficulty: string;
  transactions: Transaction[];
}

export interface Transaction {
  blockHash: string;
  blockNumber: string;
  from: string;
  gas: string;
  gasPrice: string;
  hash: string;
  input: string;
  nonce: string;
  r: string;
  s: string;
  to: string;
  transactionIndex: string;
  type: string;
  v: string;
  value: string;
}

export interface Blockdata {
  block: GetBlockByNumberResponse
}

export const getInfura = createAsyncThunk('infura/getBlockByNumber', async (blocknumber: string) => {
    const response = axios.get<any>(`api/infura/${blocknumber}`);
    return response;
  },
  {
    serializeError: serializeAxiosError,
  });

export const InfuraSlice = createSlice({
  name: 'block',
  initialState: initialState as InfuraState,
  reducers: {
    reset() {
      return initialState;
    }
  },
  extraReducers(builder) {
    builder.addCase(getInfura.fulfilled, (state, action) => {
      state.block = action.payload.data;
    });
  }
});

export const { reset } = InfuraSlice.actions;

// Reducer
export default InfuraSlice.reducer;
