import { Button } from '../styles/GlobalStyle'
import styled from 'styled-components'

export default function Academics({ academics }) {
  return (
    <>
      {academics && (
        <StyledAcademics>
          <div className='wrapper'>
            <div className='content'>
              <h1>Elementary Curriculum</h1>
              <div className='cols'>
                <div className='col'>
                  <h2>Primary</h2>
                  <div className='grades'>
                    <div className='grade'>
                      <h3>JK - SK</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae praesentium, qui corporis vel reiciendis assumenda
                        incidunt
                      </p>
                    </div>
                    <div className='grade'>
                      <h3>Grade 1</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae praesentium, qui corporis vel reiciendis assumenda
                        incidunt
                      </p>
                    </div>
                    <div className='grade'>
                      <h3>Grade 2</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae praesentium, qui corporis vel reiciendis assumenda
                        incidunt
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <h2>Junior</h2>
                  <div className='grades'>
                    <div className='grade'>
                      <h3>Grade 3</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae praesentium, qui corporis vel reiciendis assumenda
                        incidunt
                      </p>
                    </div>
                    <div className='grade'>
                      <h3>Grade 4</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae praesentium, qui corporis vel reiciendis assumenda
                        incidunt
                      </p>
                    </div>
                    <div className='grade'>
                      <h3>Grade 5</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae praesentium, qui corporis vel reiciendis assumenda
                        incidunt
                      </p>
                    </div>
                    <div className='grade'>
                      <h3>Grade 6</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae praesentium, qui corporis vel reiciendis assumenda
                        incidunt
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <h2>Intermediate</h2>
                  <div className='grades'>
                    <div className='grade'>
                      <h3>Grade 7</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae praesentium, qui corporis vel reiciendis assumenda
                        incidunt
                      </p>
                    </div>
                    <div className='grade'>
                      <h3>Grade 8</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae praesentium, qui corporis vel reiciendis assumenda
                        incidunt
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col'>
                  <Button>Core Subjects</Button>
                </div>
              </div>
            </div>
          </div>
        </StyledAcademics>
      )}
    </>
  )
}

const StyledAcademics = styled.div`
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
      14% 5%,
      16% 0,
      18% 5%,
      100% 5%,
      100% 100%,
      0 100%
    );
    background-color: rgba(255, 255, 255, 0.82);
    width: 90vw;
    height: 75vh;
    z-index: 10;
    position: relative;
    top: 5%;
    /* border: 1px solid var(--blue); */
    color: var(--blue);
    padding: 3rem 3rem 1rem 3rem;
  }
  .content {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
  }
  .content > * {
    flex-shrink: 0;
  }
  .cols {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-height: 500px;
    width: 80vw;
    justify-content: center;
  }
  .col {
    flex: 20%;
    &:nth-child(2) {
      flex: 40%;
    }
    &:last-child {
      flex: 10%;
    }
    position: relative;
  }
  .grades {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 500px;
  }
  .grade {
    /* position: relative; */
    max-width: 270px;
    max-height: 200px;
    margin-right: 2rem;
  }
  h1,
  h2,
  h3 {
    text-transform: uppercase;
  }
  h1,
  h2 {
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 1.5rem;
  }
  ${Button} {
    width: 200px;
    position: absolute;
    bottom: 5%;
  }
`
