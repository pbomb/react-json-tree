import React from 'react';
import objType from './obj-type';
import JSONObjectNode from './JSONObjectNode';
import JSONArrayNode from './JSONArrayNode';
import JSONIterableNode from './JSONIterableNode';
import JSONStringNode from './JSONStringNode';
import JSONNumberNode from './JSONNumberNode';
import JSONBooleanNode from './JSONBooleanNode';
import JSONNullNode from './JSONNullNode';
import JSONDateNode from './JSONDateNode';

export default function(key, value, prevValue, theme, initialExpanded = false) {
  const nodeType = objType(value);
  if (nodeType === 'Object') {
    return <JSONObjectNode data={value} previousData={prevValue} theme={theme} initialExpanded={initialExpanded} keyName={key} key={key} />;
  } else if (nodeType === 'Array') {
    return <JSONArrayNode data={value} previousData={prevValue} theme={theme} initialExpanded={initialExpanded} keyName={key} key={key} />;
  } else if (nodeType === 'Iterable') {
    return <JSONIterableNode data={value} previousData={prevValue} theme={theme} initialExpanded={initialExpanded} keyName={key} key={key} />;
  } else if (nodeType === 'String') {
    return <JSONStringNode keyName={key} previousValue={prevValue} theme={theme} value={value} key={key} />;
  } else if (nodeType === 'Number') {
    return <JSONNumberNode keyName={key} previousValue={prevValue} theme={theme} value={value} key={key} />;
  } else if (nodeType === 'Boolean') {
    return <JSONBooleanNode keyName={key} previousValue={prevValue} theme={theme} value={value} key={key} />;
  } else if (nodeType === 'Date') {
    return <JSONDateNode keyName={key} previousValue={prevValue} theme={theme} value={value} key={key} />;
  } else if (nodeType === 'Null') {
    return <JSONNullNode keyName={key} previousValue={prevValue} theme={theme} value={value} key={key} />;
  }
  return false;
}
