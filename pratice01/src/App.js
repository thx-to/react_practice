import "./App.css";
import { useEffect } from "react";

const { kakao } = window;

function App() {

  useEffect(() => {
    const mapContainer = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const mapOptions = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.49900095617105, 127.03286623287303), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(mapContainer, mapOptions); //지도 생성 및 객체 리턴

    const imageSrc =
      "https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_01.png?alt=media&token=9fd6776b-f1f3-43f9-a53e-118659aea335"; // 마커이미지의 주소입니다
    const imageSize = new kakao.maps.Size(50, 50); // 마커이미지의 크기입니다
    const imageOption = { offset: new kakao.maps.Point(27, 48) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      ),
      markerPosition = new kakao.maps.LatLng(
        37.49900095617105,
        127.03286623287303
      ); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage, // 마커이미지 설정
    });

    // 지도에 마커를 표시합니다
    marker.setMap(map);
  }, []);
  return <div id="map" style={{ width: "500px", height: "400px" }}></div>;
}

export default App;
