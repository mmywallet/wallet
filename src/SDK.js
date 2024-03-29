import IconService, {
    HttpProvider,
    IconBuilder,
  } from 'icon-sdk-js'
  
  const provider = new HttpProvider(window.PROVIDER_URL)
  const iconService = new IconService(provider)
  
  const {
    CallBuilder,
    CallTransactionBuilder,
  } = IconBuilder;
  
  const callBuild = ({
    from,
    methodName,
    to,
    params = {},
  } = {}) => {
    const callBuilder = new CallBuilder();
    const obj = callBuilder
      .from(from)
      .to(to)
      .method(methodName)
      .params(params)
      .build();
    return obj;
  };
  
  const sendTxBuild = ({
    from,
    to,
    methodName,
    params = {},
    networkId = window.NID,
    stepLimit = '0x493e0',
    value = '0x0',
  } = {}) => {
    const callTransactionBuilder = new CallTransactionBuilder();
    const obj = callTransactionBuilder
      .nid(networkId)
      .from(from)
      .to(to)
      .stepLimit(stepLimit)
      .value(value)
      .timestamp(`0x${((new Date()).getTime() * 1000).toString(16)}`)
      .method(methodName)
      .params(params)
      .version('0x3')
      .build();
  
    return {
      jsonrpc: '2.0',
      method: 'icx_sendTransaction',
      params: obj,
      id: 1,
    };
  };
  
  export default {
    iconService,
    callBuild,
    sendTxBuild,
  }