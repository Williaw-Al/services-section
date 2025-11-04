import { AboutBox } from '../../components/about-box';
import { ActionButton } from '../../components/action-button';

import './index.css'

export function Home() {

  return (
    <>
    <main>
      <div className='main'>
        <p>Imagem de Algo</p>
          <AboutBox>
            <p>Testando, testando e testando</p>
            <p>Acho que foi em {":)"}</p>
          </AboutBox>
          <p>Templates Exemplos</p>
      </div>

      <ActionButton>Aperte aqui PFVR</ActionButton>
    </main>
    </>
  )
}