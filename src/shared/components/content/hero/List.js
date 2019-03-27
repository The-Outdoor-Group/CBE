import React from 'react';

const List = (props) => {
  const { content, name } = props.list;
  const ddNodes = () => content.map(
    (dd, i) =>
      <dd key={i}>
        <span>{dd.title}</span>
        {dd.text}
      </dd>
  );

  return (
    <dl>
      <dt>{ name }</dt>
      { ddNodes() }
    </dl>
  );

};

export default List;
