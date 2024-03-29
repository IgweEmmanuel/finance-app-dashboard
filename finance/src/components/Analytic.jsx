import styled from 'styled-components'
import { AiOutlineMore } from 'react-icons/ai'
import { BiTransfer } from 'react-icons/bi'
import { BsBank, BsCreditCard } from 'react-icons/bs'
import { GiTakeMyMoney } from 'react-icons/gi'

function Analytic() {
  return (
    <Section>
      <div className="analytic">
        <div className="design">
          <div className="lgog">
            <BsCreditCard />
          </div>
          <div className="action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="transfer">
          <h6>Transfer via</h6>
          <h6>Card number</h6>
        </div>
        <div className="money">
          <h5>N220,000</h5>
        </div>
      </div>

      <div className="analytic">
        <div className="design">
          <div className="lgog">
            <BiTransfer />
          </div>
          <div className="action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="transfer">
          <h6>Transfer via</h6>
          <h6>Card number</h6>
        </div>
        <div className="money">
          <h5>N120,000</h5>
        </div>
      </div>

      <div className="analytic">
        <div className="design">
          <div className="lgog">
            <BsBank />
          </div>
          <div className="action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="transfer">
          <h6>Transfer via</h6>
          <h6>Card number</h6>
        </div>
        <div className="money">
          <h5>N150,000</h5>
        </div>
      </div>
      <div className="analytic">
        <div className="design">
          <div className="lgog">
            <GiTakeMyMoney />
          </div>
          <div className="action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="transfer">
          <h6>Transfer via</h6>
          <h6>Card number</h6>
        </div>
        <div className="money">
          <h5>N200,000</h5>
        </div>
      </div>
    </Section>
  )
}

export default Analytic

const Section = styled.section`
  display: flex;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 60px;
  .analytic {
    justify-content: space-between;
    padding: 1rem 2rem 1rem 2rem;
    border-radius: 1rem;
    margin-right: 10px;
    color: black;
    background-color: white;
    justify-content: space-evenly;
    align-items: center;
    transition: 0.5s ease-in-out;
    width: 170px;
    .design {
      display: flex;
      align-items: center;
      .logo {
        background-color: white;
        display: flex;
        jsutify-content: center;
        align-items: center;
        svg {
          font-size: 2rem;
        }
      }
      .action {
        margin-left: 80px;
        svg {
          font-size: 1.5rem;
        }
      }
      .transfer {
        margin-top: 20px;
        colorz; grey;
      }
      .money {
        margin-top: 20px;
      }
    }
  }
`
