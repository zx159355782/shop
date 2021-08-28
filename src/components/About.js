import React from "react";
// import photo1 from "../img/photo1.jpg";

const About = () => {
  return (
    <div className="home-about">
      <h2 className="home-about-title">關於賣場</h2>
      <img
        className="home-about-ph"
        src="https://fakeimg.pl/200x100/"
        alt="ph"
      />
      {/* <img
        className="home-about-ph"
        src={photo1}
        alt="ph"
      /> */}
      <p className="home-about-text">
        【Mysterieux flower】乾燥花/新娘捧花 ⚠️⚠️沒有提供面交/自取
        <br />
        ⚠️⚠️超商配送約2-5天時間麻煩自行評估是否來得及再下單
        <br />
        📍購買前麻煩看一下賣場內的商品資訊 (出貨時間.尺寸等資訊裡面都有標示)
        <br />
        ⚠️如收到商品覺得有疑慮請透過聊聊溝通
        <br />
        ⚠️各式花束包裝顏色一律依照賣場圖片製作 暫時不做調整修改
        <br />
        🌹【全家】滿299元免運費 結帳是時請使用運費抵用券
        <br />
        ⚠️出貨時間一律依照賣場標示時間出貨不另外指定出貨時間
        <br />
        🌿7-11/全家當天中午12:00前下單當天，12:01後下單 的隔天出貨
        <br />
        ⚠️每日訂單會於12：01以後裝箱統一寄出 7-11出貨後約2-3天送到指定門市
        <br />
        全家出貨後約2-4天送到指定門市 （實際到貨時間以超商為主）
        <br />
        💐週一~日皆有出貨
        <br />
      </p>
    </div>
  );
};

export default About;
