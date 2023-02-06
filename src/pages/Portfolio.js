import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"
import "./portfolio.css"

const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // 자동재생
        autoplaySpeed: 7000, // 자동재생속도
        dots:false,
      };

    const portSet = portfolio.map((f) =>
    <div className="portBox portBox_portfolio">
        <div className="imgBox">
            <img src={f.img} />
        </div>
        <div className="textBox">
            {/* <strong className="title">{f.title}</strong> */}
            <p className="type pad">{f.type}</p>
            <p className="tools pad">{f.tools}</p>
            <p className="rl pad">{f.rl}</p>
            <p className="wp pad">{f.wp}</p>
            <p className="concept pad">{f.concept}</p>
            <p className="link pad"><a href={f.orig} target="_blank">Orignal Site →</a></p>
            <p className="link pad"><a href={f.link} target="_blank">Main Site →</a></p>
        </div>
    </div>
    
    ) 
    return (
        <div className="innerBox innerBox_pot">
            <div className="titleBox">
                <h2>Portfolio</h2>
            </div>
            <div className="portfolioWrap">
                <Slider {...settings}>
                    {portSet}
                    {/* <div>
                        <h3>따뜻한사람들</h3>
                        <p><img src="images/warm.png" alt="" /> </p>
                        <p className="more"><a href="http://donggap.com/g_warmpeople/">사이트보기</a></p>
                    </div>
                    <div>
                        <h3>강동소방서</h3>
                        <p><img src="images/fire.png" alt="" /> </p>
                        <p className="more"><a href="http://naver.com">사이트보기</a></p>
                    </div>
                    <div>
                        <h3>카타르월드컵</h3>
                        <p><img src="images/world.png" alt="" /> </p>
                        <p className="more"><a href="http://donggap.com/worldcup/">사이트보기</a></p>
                    </div>
                    <div>
                        <h3>카타르월드컵</h3>
                        <p><img src="images/world.png" alt="" /> </p>
                        <p className="more"><a href="http://donggap.com/worldcup/">사이트보기</a></p>
                    </div> */}
                </Slider>
            </div>        
        </div>
    )
}
//인적사항
const portfolio = [
    {id:1, title: "따뜻한사람들", type:"TYPE: PC, TABLE, MOBILE", tools:"TOOLS: Html · Scss · Javascript · jQuery · Gnuboard", ri:"기여도: 개인작업100%", wp:"제작소요기간: 약12일",  concept:"CONCEPT: 메인 페이지에서의 정보 전달이 미비한 홈페이지를 서브 페이지를 통하지 않고도 메인 페이지에서 정보 전달 증가에 중점을 두었고, 방문자가 쉽게 돌침대의 장점을 알 수 있게 하는 것, 예스러운 디자인을 벤치마킹을 통해 리뉴얼 하였습니다.", img:"images/react_warm.png", link:"http://donggap.com/warmpeople/", orig:"https://ddasa.com/"},
    {id:2, title: "카타르월드컵", type:"TYPE: PC, TABLE, MOBILE", tools:"TOOLS: Html · Css · Javascript · jQuery", ri:"기여도: 개인작업100%", wp:"제작소요기간: 약4일",  concept:"CONCEPT: 카타르 월드컵의 시그니처 컬러와 현장감 있는 스틸컷 그리고 지난 월드컵의 화려한 순간들을 함께 담아보려 노력하였으며 방문자들이 쉽고 빠르게 원하는 정보를 얻을 수 있도록 레이아웃을 구성하였습니다.", img:"images/react_qatar.png", link:"http://donggap.com/qatarworldcup/", orig:"https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022"},
    {id:3, title: "강동소방서", type:"TYPE: PC, TABLE, MOBILE", tools:"TOOLS: Html · Scss · Javascript · jQuery", ri:"기여도: 개인작업100%", wp:"제작소요기간: 약5일",  concept:"CONCEPT: 딱딱했던 홈페이지를 강렬하지만 부드럽고, 작게 나열되어있던 정보들을 크게 펼쳐 정보 전달 증가에 중점을 두었습니다.", img:"images/react_fire.png", link:"http://donggap.com/firestation/", orig:"https://fire.seoul.go.kr/kangdong/main/main.do"},
    {id:4, title: "제주항공", type:"TYPE: PC, TABLE, MOBILE", tools:"TOOLS: Html · Scss · Javascript · jQuery", ri:"기여도: 개인작업100%", wp:"제작소요기간: 약4일", concept:"CONCEPT: 오리지널 페이지처럼 깔끔하고 꼭 필요한 내용을 담으려고 노력하였습니다. 고객은 티켓을 구매하려 홈페이지를 방문하였지만 홈페이지를 통해 여행 전 공항에서 느끼는 설레임을 담아보고자 하였습니다.", img:"images/react_jeju.png", link:"http://donggap.com/jejuair/", orig:"https://www.jejuair.net/ko/main/base/index.do"},
]

export default Portfolio;