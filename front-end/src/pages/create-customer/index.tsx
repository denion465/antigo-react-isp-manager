import styles from './styles.module.scss'

import React, { useRef }from 'react';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Typography from '@material-ui/core/Typography';

const planos = [
    {
      value: 'R$ 69,90',
      label: '100 Megas',
    },
    {
      value: 'R$ 99,90',
      label: '150 Megas',
    },
    {
      value: 'R$ 149,90',
      label: '300 Megas',
    },
    {
      value: 'R$ 499,90',
      label: '1 Giga',
    },
  ];

  type inputProps = {
    firstName: string,
    lastName: null,
    value: null;
    email: null,
    birth: null,
    phone: null,
    documentRg: null,
    documentCpf: null,
    selectPlan: null,
    selectValue: null,
    street: null,
    houseNumber: null,
    bairro: null,
    city: null,
    state: null,

  }

  

  

export default function createCustomer(props: inputProps) {

    // Set plan and money value
    const [plan, setPlan ] = React.useState('100');
    const [planValue, setPlanValue] = React.useState('R$ 100');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlan(event.target.value);
        setPlanValue(event.target.value);
    };

    // Select Genre
    const [value, setValue] = React.useState('feminino');
    const changeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    }

    
    const [state, setState] = React.useState({
        firstName: "",
        lastName: "",
    })

    function change(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      }



    return (
        <div className={styles.contentBox}>
            <div className={styles.formContairner} >
                <form>
                <Card className={styles.card} >
                    <CardContent >
                        <Typography  color="textSecondary" gutterBottom >
                            Cadastro de Cliente
                        </Typography>
                    </CardContent>
                </Card>
                    <TextField 
                        id="firstName"
                        label="Nome" 
                        variant="filled" 
                        color="primary"
                        value={state.firstName}
                        onChange={change}
                        
                        
                    />
                    <TextField 
                        id="lastName" 
                        
                        label="Sobrenome" 
                        variant="filled" 
                        color="primary"
                        value={state.lastName}
                        onChange={change}
                        
                    />
                    <TextField 
                        id="email" 
                        
                        label="Email" 
                        variant="filled" 
                        color="primary"
                    />
                    <TextField 
                        id="birth" 
                        
                        label="Data de Nascimento" 
                        variant="filled" 
                        color="primary"
                    />
                    <TextField 
                        id="phone"
                         
                        label="Telefone com DDD" 
                        variant="filled" 
                        color="primary"
                    />
                    <br/>              
                    <br/>
                    <TextField 
                        id="documentRg" 
                         
                        label="Documento" 
                        variant="filled" 
                        color="primary"
                    />
                    <TextField 
                        id="documentCpf" 
                         
                        label="CPF" 
                        variant="filled" 
                        color="primary"
                    />
                    <TextField
                        id="selectPlan"
                        select
                        
                        label="Selecione o plano"
                        value={plan}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Por favor selecione o plano"
                        variant="filled"
                        >
                        {planos.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </TextField>
                    <TextField
                        id="selectValue"
                         
                        disabled
                        label="Valor"
                        value={planValue}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Valor do plano selecionado"
                        variant="filled"
                        >
                        {planos.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </TextField>
                    
                    <br/>
                    <br/>
                    <TextField 
                        id="street" 
                         
                        label="Rua" 
                        variant="filled" 
                        color="primary"
                    />
                    <TextField 
                        id="houseNumber" 
                         
                        label="Número" 
                        variant="filled" 
                        color="primary"
                    />
                    <TextField 
                        id="bairro" 
                         
                        label="Bairro" 
                        variant="filled" 
                        color="primary"
                    />
                    <TextField 
                        id="city" 
                         
                        label="Cidade" 
                        variant="filled" 
                        color="primary"
                    />
                    <TextField 
                        id="state" 
                         
                        label="Estado" 
                        variant="filled" 
                        color="primary"
                    />
                    <br/>
                    <br/>
                    <br/>
                    <FormControl component="fieldset">
                    <FormLabel component="legend">Gênero</FormLabel>
                    <RadioGroup aria-label="Gênero"  value={value} onChange={changeGender}>
                    <FormControlLabel value="feminino" control={<Radio />} label="Feminino" />
                    <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                    <FormControlLabel value="outros" control={<Radio />} label="Outros" />
                    </RadioGroup>
                    </FormControl>
                    <Button
        
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<SaveIcon />}
                        onClick={change}
                        
                    >
                        Cadastrar
                    </Button>
                </form>            
        </div>


        </div>
        
    )
}