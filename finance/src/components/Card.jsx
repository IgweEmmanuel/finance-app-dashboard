import styled from 'styled-components'
import { FcSimCardChip } from 'react-icons/fc'
import mastercard from '../assets/mastercard.png'

function Card() {
  return (
    <Section>
      <div className="shopping">
        <div className="design">
          <FcSimCardChip />
        </div>
        <div className="number">
          <h6>5523-454554-353455</h6>
        </div>
        <div className="image">
          <img src={mastercard} alt="mastarcard" className="pic" />
        </div>
        <div className="name">
          <h6>CARD HOLDER</h6>
        </div>
        <div className="profile">
          <h6>Emmanuel Igwe</h6>
          <span className="t1">Mastarcard</span>
        </div>
      </div>
    </Section>
  )
}

export default Card

const Section = styled.section`
  .shopping {
    padding: 0.8rem;
    border-radius: 1rem;
    color: black;
    background-color: #22202b;
    gap: 0.5rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: blue;
      svg {
        color: black;
      }
    }
    .design {
      display: flex;
      svg {
        font-size: 2rem;
        color: white;
      }
    }
    .number {
      display: flex;
      gap: 0.5rem;
      margin-top: 10px;
      h6 {
        color: white;
        font-size: 1rem;
      }
    }
    .image {
      display: flex;
      width: 2.5rem;
      height: 2.5rem;
      margin-left: 12rem;
    }
    .name {
      display: flex;
      gap: 0.5rem;
      h6 {
        color: grey;
        font-size: 0.6rem;
      }
    }
    .profile {
      display: flex;
      align-items: left;
      gap: 5rem;
      justify-content: space-evenly;
      margin-top: 10px;
      align-items: center;
      span,
      h6 {
        color: white;
      }
    }
  }
`
