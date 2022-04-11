$(document).ready(function() {
    $("#English1").click(function() {
        $("#navbar_mindevice_content").toggle();
        $("#gotop").toggle();

    });
    $("#Chinese1").click(function() {
        $("#navbar_mindevice_content").toggle();
        $("#gotop").toggle();

    });

    $("#English,#English1").click(function() {

        console.log(document.documentElement.scrollTop +
            document.body.scrollTop);

        $("#English,#English1").css("opacity", 1);
        $("#Chinese,#Chinese1").css("opacity", 0.3);

        $("#bar1,#bar5").html("What is MetaCasino");
        $("#bar2,#bar6").html("Why MetaCasino");
        $("#bar3,#bar7").html("highlights");
        $("#bar4,#bar8").html("Tailor-made service");

        $("#title1-2").html("What is MetaCasino?");
        $("#title1-3text").html("read more");
        $("#title1-3text").css("left", 25 + "px");
        $("#title1-4text").html("MetaCasino (MTC) is a public chain created specifically for the gaming ecosystem, and MTC is also the native encrypted token as a transaction fee on this public chain. MTC is the ultimate solution with zero transaction fee when depositing and withdrawing funds in global payment channels.");
        $("#title2-2").html("Why MetaCasino?");
        $("#title2-3").html("The Ethereum transaction has increased to $40 recently. The high transaction fees of the stablecoin ERC20 USDT have caused pain points for users. Even TRON of TRC20 USDT is also facing increasing transaction fees. The only solution is the public chain developed.");
        $("#title3-2").html("7 highlights of MetaCasino");
        $("#highlight1").html("Decentralized ledger is difficult to be tampered");
        $("#highlight2").html("Zero<br> transaction fee");
        $("#highlight3").html("High privacy");

        $("#highlight4").html("Higher application autonomy");
        $("#highlight5").html("Blockchain browser");
        $("#highlight6").html("Cross-chain bridge");
        $("#highlight7").html("Online & offline combined application");
        $("#title4-2").html("Tailor-made service");
        $("#service1").html("Token Creation (For Operator)");
        $("#service2").html("Global validator group deployment & Profit sharing (For operators)");
        $("#service3-1").html("Public chain API (For operator)");
        $("#title5-2").html("Exclusive encrypted wallet (For operators & users)");
        $("#exclusive1-1").html("For users");
        $("#exclusive1-2").html("Provide users with Uniswap contracts for cross-chain currency exchange (For users)");
        $("#exclusive2-1").html("For Agent");
        $("#exclusive2-2").html("Integrate the wallet function into the system as a channel for depositing");
        $("#exclusive3-1").html("For users & agents");
        $("#exclusive3-2").html("Built-in over-the-counter (OTC) provides all the chips (cryptocurrency) on the MetaCasino for transactions");
        $("#exclusive4-1").html("For users");
        $("#exclusive4-2").html("Provide intuitively transaction records on MetaCasino");




    });
    $("#Chinese,#Chinese1").click(function() {
        $("#English,#English1").css("opacity", 0.3);
        $("#Chinese,#Chinese1").css("opacity", 1);

        $("#bar1,#bar5").html("什麼是 MetaCasino?");
        $("#bar2,#bar6").html("為什麼要開發專屬公鏈？");
        $("#bar3,#bar7").html("MetaCasino 七大優勢");
        $("#bar4,#bar8").html("量身定製服務");

        $("#title1-2").html("什麼是 MetaCasino?");
        $("#title1-3text").html("閱讀更多");
        $("#title1-3text").css("left", 55 + "px");
        $("#title1-4text").html("MetaCasino (MTC) 是專為博弈生態圈所打造的一條公鏈，MTC 同時也是這條公鏈上的原生加密代幣 (作為交易燃料費)。 MTC 是全球支付通道在出入金時唯一 0 手續費的終極解決方案。");
        $("#title2-2").html("為什麼<br>要開發專屬公鏈？");
        $("#title2-3").html("以太坊（Ethereum）手續費近期飆升至40美金，讓許多用戶招架不住。以太坊已是當今的貴族鏈，使得穩定幣 ERC20 USDT 的高額交易手續費造成用戶的痛點，即使是波場 (TRON) 的 TRC20 USDT 也面臨日益升高的交易手續費，唯一解決辦法即是公鏈開發並且專鏈專用。");
        $("#title3-2").html("MetaCasino<br>七大優勢");
        $("#highlight1").html("去中心化帳本難以竄改");
        $("#highlight2").html("0 手續費");
        $("#highlight3").html("高度隱私<td>帶來更高更強的加密隱私性。");
        $("#highlight3").css("left", 25 + "px");
        $("#highlight4").html("應用自主性更高");
        $("#highlight5").html("區塊鏈瀏覽器");
        $("#highlight6").html("跨鏈橋");
        $("#highlight7").html("線上 & 線下 結合應用");
        $("#title4-2").html("量身定製服務");
        $("#service1").html("Token 創建(For 運營商)");
        $("#service2").html("全球節點架設佈署 & 利潤共享 (For 運營商)");
        $("#service3-1").html("公鏈 API 接口 (For 運營商)");
        $("#service3-2").html("加密幣集成到現有系統，輕鬆串接全球應用，快速鏈接全球業務。");
        $("#title5-2").html("專屬加密錢包 (For 運營商 & 用戶)");
        $("#exclusive1-1").html("(For 用戶)");
        $("#exclusive1-2").html("提供用戶 Uniswap 合約做跨鏈幣幣交換");
        $("#exclusive2-1").html("(For 代理商)");
        $("#exclusive2-2").html("將錢包功能集成進系統當作出入幣的渠道");
        $("#exclusive3-1").html("(For 用戶 & 代理商)");
        $("#exclusive3-2").html("內建場外 OTC 提供 MetaCasino 鏈上所有籌碼(加密貨幣)做交易");
        $("#exclusive4-1").html("(For 用戶)");
        $("#exclusive4-2").html("提供 MetaCasino 鏈上的交易紀錄");


    });
});