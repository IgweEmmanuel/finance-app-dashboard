import styled from 'styled-components'
import Notification from './Notification'
import Card from './Card'
import Activity from './Activity'
import Payment from './Payment'

function RightSidebar() {
  return (
    <Section>
      <div className="grid">
        <Notification />
        <Card />
        <Activity />
        <Payment />
      </div>
    </Section>
  )
}

export default RightSidebar

const Section = styled.section`
  position: fixed;
  right: 0;
  top: 0;
  background-color: #ececf6;
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  gap: 2rem;
  .grid {
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media and screen(min-width: 400px) {
    display: none;
  }
`
