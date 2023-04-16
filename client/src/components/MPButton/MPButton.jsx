
// Importaciones Mercado Pago
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


const { VITE_PUBLIC_KEY } = import.meta.env



const MPButton = ({preferenceId}) => {

    initMercadoPago(VITE_PUBLIC_KEY); // Inicializacion mercado Pago
    
    return (
        <div id="wallet_container">
            {preferenceId && <Wallet initialization={{ preferenceId: preferenceId, redirectMode: 'blank' }} />}
        </div>
    )
}

export default MPButton