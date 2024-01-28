import styled, { css } from "styled-components";

const decideColor = (color: any) => css`
  ${color ? color : "#f74343"};
`;

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
  background-color: ${(props: any) => decideColor(props.color)};
  height: 48px;

  &:hover {
    transform: scale(1.04);
    background-color: ${(props: any) => decideColor(props.color)};
  }
`;

interface StyledProps {
  variant?: string;
  color: string;
}

export default function StyledBtn({ variant, color }: StyledProps) {
  return (
    <BtnStyle variant={variant} color={color}>
      StyledBtn
    </BtnStyle>
  );
}
