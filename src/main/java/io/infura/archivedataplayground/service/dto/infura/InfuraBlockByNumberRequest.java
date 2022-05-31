package io.infura.archivedataplayground.service.dto.infura;

public class InfuraBlockByNumberRequest {
        private String jsonrpc = "2.0";
        private String method;
        private Object[] params = new Object[0];
        private String id = "1";

    public String getJsonrpc() {
        return jsonrpc;
    }

    public InfuraBlockByNumberRequest setJsonrpc(String jsonrpc) {
        this.jsonrpc = jsonrpc;
        return this;
    }

    public String getMethod() {
        return method;
    }

    public InfuraBlockByNumberRequest setMethod(String method) {
        this.method = method;
        return this;
    }

    public Object[] getParams() {
        return params;
    }

    public InfuraBlockByNumberRequest setParams(Object[] params) {
        this.params = params;
        return this;
    }

    public String getId() {
        return id;
    }

    public InfuraBlockByNumberRequest setId(String id) {
        this.id = id;
        return this;
    }
}
