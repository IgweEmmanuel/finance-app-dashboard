import styled from 'styled-components'
import Navbar from './Navbar'
import Analytic from './Analytic'
import Balance from './Balance'
import History from './History'

function Dashboard() {
  return (
    <Section>
      <Navbar />
      <Analytic />
      <Balance />
      <History />
    </Section>
  )
}

export default Dashboard

const Section = styled.section`
  margin-left: 5vw;
  margin-right: 2rem;
  padding: 2rem;
  height: 60rem;
  backgroumd-color: #f5f5f5;
  .grid {
    margin-top: 0.5rem;
    z-index: 2;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
