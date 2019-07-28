
const processContact = contact => ({
    name: `${contact.name.first} ${contact.name.last}`,
    phone: contact.phone
})

export const fetchUsers = async () => {
    const resp = await fetch('https://randomuser.me/api/?nat=us,gb,ca&results=100');
    const { results } = await resp.json();
    return results.map(processContact);
    // fetch('https://randomuser.me/api/?nat=us,gb,ca&results=100')
    //   .then((response) => response.json())
    //   .then(({ results }) => this.setState({ contacts: results }))
}

export const login = async (username, password) => {
    const response = await fetch('http://localhost:8000', {
        mode: 'no-cors',
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username, password }),
    })
    console.log(response)
    if (response.ok) {
        return true
    }

    const errMessage = await response.text()
    throw new Error(errMessage)
}