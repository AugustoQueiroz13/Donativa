import axios from "axios";
import React from "react";
import { useState, Navigate } from "react";
import { Link } from "react-router-dom";

import './index.css';

function CadBeneficiario() {

    const [nome, setNome] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [DataNasc, setDataNasc] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [rua, setRua] = useState('');
    const [num, setNum] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const salvar = async (e) => {
        e.preventDefault();
        console.log(nome, rg, cpf, DataNasc, telefone, email, senha);
        await axios.post("http://localhost:8080/beneficiario", {
            nome_bn: nome,
            rg_bn: rg,
            cpf_bn: cpf,
            data_nasc_bn: DataNasc,
            telefone_bn: telefone,
        })
        await axios.post("http://localhost:8080/usuarios", {
            email: email,
            senha: senha,
        })
        await axios.post("http://localhost:8080/endereco", {
            rua: rua,
            numero: num,
            cep: cep,
            bairro: bairro,
            cidade: cidade,
            estado: estado, 
        })
        .then((result) => {
            alert("Beneficiario Cadastrado");
            Navigate("/");
        })
        .catch((erro) => {
            console.log(erro);
        });
    }
        
    return (
        <main id="main" style={{marginTop:"2rem"}}>
            <section id="cadastroBeneficiado">
                <div className="form mb-3" id="cadastro">
                    <form method="post" action="index.php">
                        <h3 className="mt-3" style={{margin:"2rem auto 2rem auto"}}>Cadastro de beneficiados</h3>
                        <hr/>
                        <h3 className="mt-3" style={{margin:"3rem auto 2rem auto"}}>Dados Pessoais</h3>
                        <label>Nome:</label>
                        <input type="text" size="70" placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)}/> <br/>
                        <label>RG:</label>
                        <input type="text" size="30" placeholder="XX.XXX.XXX-X." value={rg} onChange={(e) => setRg(e.target.value)} />
                        <label>CPF:</label>
                        <input type="text" size="30" placeholder="XX.XXX.XXX-XX" value={cpf} onChange={(e) => setCpf(e.target.value)} /> <br/>
                        <label>Data Nascimento:</label>
                        <input type="Date" placeholder="" value={DataNasc} onChange={(e) => setDataNasc(e.target.value)} />
                        <label>Telefone:</label>
                        <input type="number" size="40" placeholder="xx x xxxx-xxxx" value={telefone} onChange={(e) => setTelefone(e.target.value)} /> <br/>
                        <label>Email:</label>
                        <input type="text" size="70" placeholder="Email valido" value={email} onChange={(e) => setEmail(e.target.value)} /> <br/>
                        <label>Senha:</label>
                        <input type="password" size="40" placeholder="********" value={senha} onChange={(e) => setSenha(e.target.value)}/> <br/>
                        <h3 className="mt-3" style={{margin:"3rem auto 2rem auto"}}>Endereço</h3>
                        <label>Estado:</label>
                        <select name="estado" id="uf" value={estado} onChange={(e) => setEstado(e.target.value)}>
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
                        <input type="text" size="30" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}/><br />
                        <label>CEP:</label>
                        <input type="text" size="25" placeholder="XXXXX-XXX" value={cep} onChange={(e) => setCep(e.target.value)}/>
                        <label>Bairro:</label>
                        <input type="text" size="30" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} /><br />
                        <label>Rua</label>
                        <input type="text" size="30" placeholder="Logadouro" value={rua} onChange={(e) => setRua(e.target.value)} />
                        <label>Numero:</label>
                        <input type="text" size="5" placeholder="xx" value={num} onChange={(e) => setNum(e.target.value)} /><br />
                        <button type="submit" value="Enviar" onClick={salvar}><Link to="/home">Enviar</Link></button>
                        <Link>
                        <button type="submit" to="/Login">Fazer Login</button>
                        </Link>
                   </form>
                </div>
            </section>
        </main>
    );

}
export default CadBeneficiario;