import Modal from 'react-modal';
import React, { useState } from "react";
import { BsPerson, BsSearch } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import "./Cabecalho.css";
import { useContext } from 'react';
import Context from '../ContextApi/Context';

Modal.setAppElement('#root');

export default function Cabecalho() {

    const [modalIsOpen, setIsOpen] = useState(false);

    const [quantidade, setQuantidade] = useContext(Context);

    function abrirModal() {
        setIsOpen(true);
    }

    function fecharModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div className="cabecalho__input">
                <form>
                    <div className='buscar'>
                        <input type='text' placeholder='Buscar'/>
                        <button className='botao__buscar'>
                        <BsSearch size={14} />
                        </button>
                    </div>
                </form>
            </div>
            <div className="cabecalho__icones">
                <BsPerson onClick={abrirModal} size={20} />
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={fecharModal}
                    contentLabel="Modal de exemplo"
                    className="modal"
                    overlayClassName="modal-overlay"
                >
                    <button onClick={fecharModal}>Fechar</button>
                    <h3 className='modal__titulo'>Iniciar sessão</h3>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder='Senha'/>
                    <button className='modal__enviar' type='submit'>Iniciar sessão</button>
                    <p className='modal__texto'>Não possui uma conta ainda? <u>Criar uma conta</u></p>
                </Modal>
                <div className='cart'>
                    <BsCart2 size={20} />
                    <span className='numero'>{quantidade}</span>
                </div>
            </div>
        </>
    );
}
