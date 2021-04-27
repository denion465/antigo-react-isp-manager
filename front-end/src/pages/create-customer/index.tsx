import styles from './styles.module.scss'

import React from 'react';

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
      value: '100',
      label: '100 Megas',
    },
    {
      value: '150',
      label: '150 Megas',
    },
    {
      value: '300',
      label: '300 Megas'
    },
    {
      value: '1000',
      label: '1 Giga',
    },
  ];

export default function createCustomer() {
    const [plan, setPlan] = React.useState('100');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlan(event.target.value);
    };
    const [value, setValue] = React.useState('female');
    const changeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    }
    return (
        <div className={styles.formContairner} >
            <form>
            <Card className={styles.card} >
                <CardContent >
                    <Typography  color="textSecondary" gutterBottom >
                        <p>Cadastro de Cliente</p>
                    </Typography>
                </CardContent>
            </Card>
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
                    label="Telefone com DDD" 
                    variant="filled" 
                    color="primary"
                />
                <br/>              
                <br/>
                <TextField 
                    id="filled-basic" 
                    label="Documento" 
                    variant="filled" 
                    color="primary"
                />
                <TextField 
                    id="filled-basic" 
                    label="CPF" 
                    variant="filled" 
                    color="primary"
                />
                                <TextField
                    id="filled-select-native"
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
                
                <br/>
                <br/>
                <TextField 
                    id="filled-basic" 
                    label="Rua" 
                    variant="filled" 
                    color="primary"
                />
                <TextField 
                    id="filled-basic" 
                    label="Número" 
                    variant="filled" 
                    color="primary"
                />
                <TextField 
                    id="filled-basic" 
                    label="Bairro" 
                    variant="filled" 
                    color="primary"
                />
                <TextField 
                    id="filled-basic" 
                    label="Cidade" 
                    variant="filled" 
                    color="primary"
                />
                <TextField 
                    id="filled-basic" 
                    label="Estado" 
                    variant="filled" 
                    color="primary"
                />
                <br/>
                <br/>
                <br/>
                <FormControl component="fieldset">
                <FormLabel component="legend">Gênero</FormLabel>
                <RadioGroup aria-label="Gênero" name="genero1" value={value} onChange={changeGender}>
                <FormControlLabel value="Feminino" control={<Radio />} label="Feminino" />
                <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
                <FormControlLabel value="Outros" control={<Radio />} label="Outros" />
                </RadioGroup>
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon />}
                    
                >
                    Save
                </Button>
            </form>

        </div>
        
    )
}