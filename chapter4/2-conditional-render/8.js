const { memo } = require('react');

<div>
  {cash && <p>{cash}원 보유중</p>}
  {memo && <p>{200 - memo.length}자 입력 가능</p>}
</div>;
