package io.infura.archivedataplayground.service.dto.infura;

public class GetBlockByNumberResponse {
    private String jsonrpc;
    private String id;
    private GetBlockByNumberResult result;

    public String getJsonrpc() {
        return jsonrpc;
    }

    public void setJsonrpc(String jsonrpc) {
        this.jsonrpc = jsonrpc;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public GetBlockByNumberResult getResult() {
        return result;
    }

    public void setResult(GetBlockByNumberResult result) {
        this.result = result;
    }
}
