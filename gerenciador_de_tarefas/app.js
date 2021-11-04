function criaNovaTarefa(){
    const bancodeDados = firebase.firestore();
    const tarefa = {
        descricao: 'Lavar a louça',
        pronta: false
    }
    bancodeDados.collection('tarefas').add(tarefa).then((resultado) =>{
        console.log(resultado);
    });
}

function buscarTarefas(){
    const bancodeDados = firebase.firestore();
    bancodeDados.collection('tarefas').get().then((querySnapHot) => {
        const result =  querySnapHot.docs.map(doc => doc.data());
        console.log(result);
    });
}