import { Button } from '../styles/GlobalStyle'
import styled from 'styled-components'

export default function Calendar({ calendar }) {
  const calendarID = '1mllmsiuipoho3jqg8f6b3rlrg@group.calendar.google.com'
  return (
    <>
      {calendar && (
        <StyledAcademics>
          <div className='wrapper'>
            <div className='content'>
              <iframe
                src={
                  'https://calendar.google.com/calendar/u/0/embed?src=1mllmsiuipoho3jqg8f6b3rlrg@group.calendar.google.com'
                }
                // style='border: 0'
                width='1440'
                height='700'
                // frameBorder='0'
                // scrolling='no'
              ></iframe>
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
      64% 5%,
      66% 0,
      68% 5%,
      100% 5%,
      100% 100%,
      0 100%
    );
    background-color: rgba(255, 255, 255, 0.82);
    width: 75vw;
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
