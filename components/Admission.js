import { Button } from '../styles/GlobalStyle'
import styled from 'styled-components'

export default function Admission({ admission }) {
  return (
    <>
      {admission && (
        <StyledAdmission>
          <div className='wrapper'>
            <div className='content'>
              <h1>Admission</h1>
              <div className='cols'>
                <div className='col'>
                  <Button>Plan a Visit </Button>
                </div>
                <div className='col'>
                  <Button>Application Form</Button>
                </div>
                <div className='col'>
                  <Button
                    href='/file/Tuition Schedule 2021.pdf'
                    target='_blank'
                  >
                    Fees
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </StyledAdmission>
      )}
    </>
  )
}

const StyledAdmission = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: polygon(0% 5%, 5% 5%, 7% 0, 9% 5%, 100% 5%, 100% 100%, 0 100%);
    background-color: rgba(255, 255, 255, 0.82);
    width: 50vw;
    height: 25vh;
    z-index: 10;
    position: relative;
    top: -20%;
    /* border: 1px solid var(--blue); */
    color: var(--blue);
    padding: 3rem 3rem 1rem 3rem;
  }
  .content {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: flex-start;
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
    justify-content: center;
  }
  .col {
    margin-right: 2rem;
    &:last-child {
      margin-right: 0;
    }
  }

  h1 {
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  ${Button} {
    width: 200px;
    margin-bottom: 2rem;
  }
`
