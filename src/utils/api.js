class Api {
  static headers = async function(contentType) {
    return {
      'Content-Type': contentType || 'application/json'
    };
  };

  // Todas las llamadas pasan por aquí
  static xhr = async function(route, params, verb) {
    const host = 'https://notes-workshop.herokuapp.com/';
    const url = `${host}${route}`;
    const headers = await this.headers();
    const options = {
      method: verb,
      headers: headers,
      body: params ? JSON.stringify(params) : null
    };
    return fetch(url, options);
  };

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }
}

export default Api;