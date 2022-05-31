package io.infura.archivedataplayground.service.dto.infura;

public class InfuraRequest {
        private String jsonrpc = "2.0";
        private String method = "eth_blockNumber";
        private String[] params = new String[0];
        private String id = "1";

    public String getJsonrpc() {
        return jsonrpc;
    }

    public InfuraRequest setJsonrpc(String jsonrpc) {
        this.jsonrpc = jsonrpc;
        return this;
    }

    public String getMethod() {
        return method;
    }

    public InfuraRequest setMethod(String method) {
        this.method = method;
        return this;
    }

    public String[] getParams() {
        return params;
    }

    public InfuraRequest setParams(String[] params) {
        this.params = params;
        return this;
    }

    public String getId() {
        return id;
    }

    public InfuraRequest setId(String id) {
        this.id = id;
        return this;
    }
}
