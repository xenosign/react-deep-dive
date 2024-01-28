import styled from "styled-components";

const BtnStyle = styled.button`
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  border: 1px solid transparent;
  letter-spacing: 2px;
  min-width: 160px;
  font-weight: 700;
  text-align: center;
  padding: 17px 48px;
  color: #fff;
  background-color: #f74343;
  background-color: ${(props) => props.color};
  height: 48px;

  &:hover {
    transform: scale(1.04);
    background-color: #f74343;
    background-color: ${(props) => props.color};
  }
`;

export default function StyledBtn({ variant, color }) {
  const colorVariant = {
    green: "#1ed760",
    blue: "#3f95f1",
  };

  const finalColor = variant ? colorVariant[variant] : color;

  return <BtnStyle color={finalColor}>StyledBtn</BtnStyle>;
}

// import styled from "styled-components";

// const colorVariant = {
//   green: "background-color:#1ed760",
//   blue: "background-color: #3f95f1",
// };

// const colorSet = (color) => {
//   return `background-color: ${color}`;
// };

// const BtnStyle = styled.button`
//   display: inline-block;
//   outline: none;
//   cursor: pointer;
//   font-size: 14px;
//   line-height: 1;
//   border-radius: 500px;
//   border: 1px solid transparent;
//   letter-spacing: 2px;
//   min-width: 160px;
//   font-weight: 700;
//   text-align: center;
//   padding: 17px 48px;
//   color: #fff;
//   background-color: #f74343;
//   ${(props) =>
//     props.variant ? colorVariant[props.variant] : colorSet(props.color)};
//   height: 48px;

//   &:hover {
//     transform: scale(1.04);
//     background-color: #f74343;
//     ${(props) =>
//       props.variant ? colorVariant[props.variant] : colorSet(props.color)};
//   }
// `;

// export default function StyledBtn({ variant, color }) {
//   return (
//     <BtnStyle variant={variant} color={color}>
//       StyledBtn
//     </BtnStyle>
//   );
// }
