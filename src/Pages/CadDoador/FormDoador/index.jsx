import React from "react";
import { Link } from "react-router-dom";

import './index.css';

function CadDoador() {
    return(
        <main id="main" style={{marginTop:"2rem"}}>
            <section id="cadastroDoador">
                <div className="form mb-3" id="cadastro">
                    <form method="post" action="index.php">
                        <h3 className="mt-3" style={{margin:"2rem auto 2rem auto"}}>Cadastro de Doador</h3>
                        <hr/>
                        <h3 className="mt-3" style={{margin:"3rem auto 2rem auto"}}>Dados Pessoais</h3>
                        <label>Nome ou Razão Social</label>
                        <input type="text" size="70" placeholder="Nome completo" /> <br/>
                        <label>CNPJ ou CPF</label>
                        <input type="text" size="40" placeholder="XX.XXX.XXX-X." /> <br/>
                        <label>Data Nascimento:</label>
                        <input type="Date" placeholder="" />
                        <label>Telefone:</label>
                        <input type="number" size="40" placeholder="xx x xxxx-xxxx" /> <br/>
                        <label>Email:</label>
                        <input type="text" size="70" placeholder="Email valido" /> <br/>
                        <label>Senha:</label>
                        <input type="password" size="40" placeholder="********" /> <br/>
                        <h3 className="mt-3" style={{margin:"3rem auto 2rem auto"}}>Endereço</h3>
                        <label>Estado:</label>
                        <select name="estado" id="uf">
                            <option value="0">Escolha sua região</option>
                            <optgroup label="Norte">
                                <option value="1">Acre</option>
                                <option value="2">Amazonas</option>
                                <option value="3">Amapá</option>
                                <option value="4">Pará</option>
                                <option value="5">Rondonia</option>
                                <option value="6">Roraima</option>
                                <option value="7">Tocantins</option>
                            </optgroup>
                            <optgroup label="Nordeste">
                                <option value="8">Alagoas</option>
                                <option value="9">Bahia</option>
                                <option value="10">Ceara</option>
                                <option value="11">Maranhão</option>
                                <option value="12">Piaui</option>
                                <option value="13">Pernambuco</option>
                                <option value="14">Paraiba</option>
                                <option value="15">Rio Grande do Norte</option>
                                <option value="16">Sergipe</option>
                            </optgroup>
                            <optgroup label="Centro-Oeste"></optgroup>
                            <option value="17">Goias</option>
                            <option value="18">Mato Grosso</option>
                            <option value="19">Mato Grosso do Sul</option>
                            <option value="20">Distrito Federal</option>
                            <optgroup label="Sudeste">
                                <option value="21">Espirito Santo</option>
                                <option value="22">Minas Gerais</option>
                                <option value="23">Rio de Janeiro</option>
                                <option value="24">São Paulo</option>
                            </optgroup>
                            <optgroup label="Sul">
                                <option value="25">Paraná</option>
                                <option value="26">Rio Grande do Sul</option>
                                <option value="27">Santa Catarina</option>
                            </optgroup>
                        </select>
                        <label>Cidade:</label>
                        <input type="text" size="30" placeholder="Cidade" /><br />
                        <label>CEP:</label>
                        <input type="text" size="25" placeholder="XXXXX-XXX" />
                        <label>Bairro:</label>
                        <input type="text" size="30" placeholder="Bairro" /><br />
                        <label>Rua</label>
                        <input type="text" size="30" placeholder="Logadouro" />
                        <label>Numero:</label>
                        <input type="text" size="5" placeholder="xx" /><br />
                        <button type="submit" value="Enviar">Enviar</button>
                        <Link>
                        <button type="submit" to="/Login">Fazer Login</button> 
                        </Link>
                    </form>
                </div>
            </section>
        </main>
    );
}
export default CadDoador;