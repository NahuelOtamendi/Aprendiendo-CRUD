const crearNuevaLinea = () => {
    `<tr>
    <td class="td" data-td>Gabriela</td>
    <td>gabriela@alura.com</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  </tr>`
}

const http = new XMLHttpRequest();
//Abrit http (metodos, url)
//CRUD   - Metodos HTTP
//Create - POST
//Read   - GET
//Update - PUT/PATCH
//Delete - DELETE

http.open("GET", "http://localhost:3000/perfil")

http.send();

http.onload = () => {
    const data = http.response;
    console.log(data);
}
