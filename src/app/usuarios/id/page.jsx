import axios from "axios";

async function getUsuario(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const usuario = await axios.get(url);
  return usuario.data;
}

export default async function Usuario({ params }) {
  const { id } = params;
  const usuario = await getUsuario(id);

  return (
    <div>
      <h1>Información del Usuario</h1>
      <table className="table">
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{usuario.id}</td>
          </tr>
          <tr>
            <td>Nombre:</td>
            <td>{usuario.name}</td>
          </tr>
          <tr>
            <td>Usuario:</td>
            <td>{usuario.username}</td>
          </tr>
          <tr>
            <td>Correo:</td>
            <td>{usuario.email}</td>
          </tr>
          <tr>
            <td>Teléfono:</td>
            <td>{usuario.phone}</td>
          </tr>
          <tr>
            <td>Website:</td>
            <td>{usuario.website}</td>
          </tr>
          <tr>
            <td>Dirección:</td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>Calle:</td>
                    <td>{usuario.address.street}</td>
                  </tr>
                  <tr>
                    <td>Suite:</td>
                    <td>{usuario.address.suite}</td>
                  </tr>
                  <tr>
                    <td>Ciudad:</td>
                    <td>{usuario.address.city}</td>
                  </tr>
                  <tr>
                    <td>Código Postal:</td>
                    <td>{usuario.address.zipcode}</td>
                  </tr>
                  <tr>
                    <td>Geo:</td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td>Latitud:</td>
                            <td>{usuario.address.geo.lat}</td>
                          </tr>
                          <tr>
                            <td>Longitud:</td>
                            <td>{usuario.address.geo.lng}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>Compañía:</td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>Nombre:</td>
                    <td>{usuario.company.name}</td>
                  </tr>
                  <tr>
                    <td>Eslogan:</td>
                    <td>{usuario.company.catchPhrase}</td>
                  </tr>
                  <tr>
                    <td>BS:</td>
                    <td>{usuario.company.bs}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}