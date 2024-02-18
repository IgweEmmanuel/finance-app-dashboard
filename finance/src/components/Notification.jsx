import styled from 'styled-components'
import { AiOutlineCalendar } from 'react-icons/ai'
import { AiOutlineBell } from 'react-icons/ai'
import { AiOutlineCaretDown } from 'react-icons/ai'
import avatar from '../assets/avatar.png'

function Notification() {
  return (
    <Nav>
      <div className="notification">
        <AiOutlineCalendar className="font-icon" />
        <AiOutlineBell className="font-icon" />
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
        <AiOutlineCaretDown className="font-icon" />
      </div>
    </Nav>
  )
}

export default Notification

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  justify-content: right;
  .notification {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    .font-icon {
      font-size: 1.5rem;
    }
    svg {
      color: grey;
    }
    .image {
      display: flex;
      gap: 1rem;
      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 3rem;
      }
    }
  }
`
