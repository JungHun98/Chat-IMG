import '../App.css';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import styled from '@emotion/styled';

const MyTypography = styled(Typography)({
  fontSize: '0.8em',
  fontWeight: 'bolder',
  fontFamily: 'Nanum Gothic, sans-serif'
  // color: "#D3D3D3"
})

const MyCard = styled(Card)({
  marginBottom: '5px',
  paddingTop: '8px',
  backgroundColor: "#acacbe"
})

function InitContent(props) {
  const ulStyle = {
    width: '800px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Nanum Gothic, sans-serif'
  }

  const liStyle = {
    width: '30%'
  }

  return (
    <section>
      <h1>Chat IMG</h1>
      <div>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <h2>제시어 예시</h2>
            <MyCard variant="outlined">
              <CardContent>
                <MyTypography>
                  고양이, 파란눈, 하얀 털
                </MyTypography>
              </CardContent>
            </MyCard>
            <MyCard variant="outlined">
              <CardContent>
                <MyTypography>
                  나무 밴치, 낡은, 맑은 날, 혼자
                </MyTypography>
              </CardContent>
            </MyCard>
            <MyCard variant="outlined">
              <CardContent>
                <MyTypography>
                  검정색 머그컵, 많은 책, 책상 위
                </MyTypography>
              </CardContent>
            </MyCard>
          </li>
          <li style={liStyle}>
            <h2>기능</h2>
            <MyCard variant="outlined">
              <CardContent>
                <MyTypography>

                  시간 표현이 가능합니다.<br></br>
                  <br></br>
                  ex) 낮, 밤, 저녁, 새벽,<br></br>
                  여름, 크리스마스
                </MyTypography>
              </CardContent>
            </MyCard>
            <MyCard variant="outlined">
              <CardContent>
                <MyTypography>
                  이미지 스타일 표현이 가능합니다.<br></br>
                  <br></br>
                  ex) 밝은, 따뜻한, 선명한
                </MyTypography>
              </CardContent>
            </MyCard>
          </li>
          <li style={liStyle}>
            <h2>권장사항</h2>
            <MyCard variant="outlined">
              <CardContent>
                <MyTypography>
                  가능한 객관적이면서 명확한 표현을 사용해주세요.
                  <br></br>(ex. 좋은, 행복한 x)
                </MyTypography>
              </CardContent>
            </MyCard>
            <MyCard variant="outlined">
              <CardContent>
                <MyTypography>
                  짧고 간결하게 작성해주세요.
                </MyTypography>
              </CardContent>
            </MyCard>
            <MyCard variant="outlined">
              <CardContent>
                <MyTypography>
                  단어를 나열하는 방식으로
                  작성하면 제시어를 더
                  이해하기 쉽습니다.
                </MyTypography>
              </CardContent>
            </MyCard>
          </li>
        </ul>
      </div>
    </section>
  );

}

export default InitContent;
