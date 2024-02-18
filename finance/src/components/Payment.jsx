import styled from 'styled-components'
import { BiHomeAlt } from 'react-icons/bi'
import { BiCar } from 'react-icons/bi'

function Payment() {
  return (
    <Section>
      <div className="title">
        <h4>Upcoming Payments</h4>
        <h6>17 Feb 2024</h6>
      </div>
      <div className="analytic">
        <div className="design">
          <div className="logo">
            <BiHomeAlt />
          </div>
        </div>
        <div className="content">
          <h4>House Rent</h4>
          <h6 className="color">Pending</h6>
        </div>
        <div className="money">
          <h5>N150,000</h5>
        </div>
      </div>

      <div className="analytic">
        <div className="design">
          <div className="logo">
            <BiCar />
          </div>
        </div>
        <div className="content">
          <h4>Car Insurance</h4>
          <h6 className="color">Pending</h6>
        </div>
        <div className="money">
          <h5>N250,000</h5>
        </div>
      </div>
    </Section>
  )
}

export default Payment

const Section = styled.section`
  .analytic {
    padding: 0.3rem 0.8rem 0.3rem 1.2rem;
    color: black;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #f5f5fd;
      color: black;
      svg {
        color: black;
      }
    }
    float: both;
    .design {
      display: flex;
      align-items: center;
      gap: 1rem;
      .logo {
        background-color: white;
        border-radius: 1rem;
        border: 1px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        svg {
          font-size: 1.5rem;
        }
      }
      .color {
        color: grey;
      }
    }
    .money {
      h5 {
        float: right;
        margin-top: -30px;
      }
    }
  }
`
