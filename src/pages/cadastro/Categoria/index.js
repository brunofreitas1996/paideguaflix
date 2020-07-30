import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    function setValue(chave, valor) {

        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handlerChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
         );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function habdleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais)

            }}>

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handlerChange}
                />
                
                <FormField
                    label="Descrição"
                    type="???"
                    name="descricao"
                    value={values.descricao}
                    onChange={handlerChange}
                />
                {/*<div>
                    <label>
                        Descrição:
                        <textarea 
                        type="text"
                        value={values.descricao}
                        name="descricao"
                        onChange={handlerChange}
                        />
                    </label>
                </div>*/}
                <FormField
                    label="Cor"
                    type="Color"
                    name="cor"
                    value={values.cor}
                    onChange={handlerChange}
                />
                {/*<div>
                    <label>
                        Cor:
                        <input 
                        type="Color"
                        value={values.cor}
                        name="cor"
                        onChange={handlerChange}
                        />
                    </label>

                </div>*/}

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice)=>{
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    );
                })}
            </ul>


            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;