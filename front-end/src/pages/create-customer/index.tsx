import styles from './styles.module.scss'
import { TextField } from '@material-ui/core';
import React from 'react';

export default function createCustomer() {
    return (
        <div className={styles.formContairner} >
            <form>
                <TextField 
                id="filled-basic" 
                label="Nome" 
                variant="filled" 
                color="primary"
                />
                <TextField 
                id="filled-basic" 
                label="Sobrenome" 
                variant="filled" 
                color="primary"
                />
                <TextField 
                id="filled-basic" 
                label="Email" 
                variant="filled" 
                color="primary"
                />
                <TextField 
                id="filled-basic" 
                label="Data de Nascimento" 
                variant="filled" 
                color="primary"
                />
                <TextField
                id="filled-basic" 
                
                label="Plano" 
                helperText="Por favor selecione seu plano"
                variant="filled" 
                color="primary"
                >
        
                </TextField>
                
                <TextField 
                id="filled-basic" 
                label="Data de Nascimento" 
                variant="filled" 
                color="primary"
                />
                <TextField 
                id="filled-basic" 
                label="Data de Nascimento" 
                variant="filled" 
                color="primary"
                />
                <TextField 
                id="filled-basic" 
                label="Data de Nascimento" 
                variant="filled" 
                color="primary"
                />                
                </form>
        </div>
        
    )
}