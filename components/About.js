import { Button } from '../styles/GlobalStyle'
import styled from 'styled-components'

export default function About() {
  return (
    <StyledAbout>
      <div className='wrapper'>
        <div className='triangle'></div>
        <div className='content'>
          <div className='left'>
            <h1>Who We Are</h1>
            <p>
              With a mission to “Develop Students Into World Citizens”, King’s
              College is a unique co-educational, university preparatory day
              school with an academic breadth spanning from Pre-School (age 2)
              to University entrance. Driven by the quest for academic
              excellence and brought forth as a viable solution to the existing
              challenges within our public school system, King’s College is an
              academic institution designed to lead the way in the field of 21st
              century education while still preserving our historic and timeless
              values. At King’s College our focus is the next generation!​
            </p>
            <h3>Philosophy</h3>
            <h3>School Values</h3>
            <Button>Registration Form</Button>
          </div>
          <div className='right'>
            <p>
              <q>
                And all thy children shall be taught of the Lord and great shall
                be the peace of thy children.
              </q>{' '}
              - Isaiah 54:13​
            </p>
          </div>
        </div>
      </div>
    </StyledAbout>
  )
}

const StyledAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: polygon(
      0% 5%,
      8% 5%,
      10% 0,
      12% 5%,
      100% 5%,
      100% 100%,
      0 100%
    );
    background-color: rgba(255, 255, 255, 0.85);
    width: 80vw;
    height: 60vh;
    z-index: 10;
    border: 1px solid var(--blue);
    color: var(--blue);
    padding: 3rem 3rem 5rem 3rem;
  }
  .triangle {
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    flex: 1;
    margin-right: 3rem;
    position: relative;
  }
  ${Button} {
    margin-top: 1rem;
    position: absolute;
    right: 0;
    /* bottom: 0; */
  }
  .right {
    flex: 1;
  }
  q {
    font-size: 2rem;
    font-style: italic;
  }
`
