const getState = ({ getStore, getActions, setStore }) => {
    const API_BASE_URL = "https://playground.4geeks.com/contact";

    return {
        store: {
            contacts: [], // Cambiado a plural para consistencia
            agendaName: "",
            agenda: {
                slug: '',
                id: null,
            },
        },
        actions: {

            // LOGIN
            // crear nueva agenda
            handleCreateAgenda: async (loginInputValue, navigate) => {
                if (!loginInputValue.trim()) {
                    alert("Ingresa un nombre válido.");
                    return;
                }

                try {
                    const createResponse = await fetch(`${API_BASE_URL}/agendas/${loginInputValue}`, {
                        method: "POST",
                        headers: { "accept": "application/json" },
                    });

                    if (createResponse.ok) {
                        const data = await createResponse.json();
                        console.log("Agenda creada:", data);
                        alert(`Agenda '${loginInputValue}' creada exitosamente.`);
                        navigate(`/home/${loginInputValue.trim()}`);
                    } else if (createResponse.status === 400) {
                        alert("La agenda ya existe. Por favor, intenta con otro nombre.");
                    } else {
                        console.error("Error al crear la agenda:", createResponse.status);
                        alert("No se pudo crear la agenda. Intenta nuevamente.");
                    }
                } catch (error) {
                    console.error("Error en la solicitud:", error.message);
                    alert("Hubo un error al conectar con el servidor.");
                }
            },
            // ingresar si ya existe
            handleLogin: async (loginInputValue, navigate) => {
                if (!loginInputValue.trim()) {
                    alert("Por favor ingresa un nombre válido.");
                    return;
                }

                try {
                    const checkResponse = await fetch(`${API_BASE_URL}/agendas/${loginInputValue}`, {
                        method: "GET",
                        headers: { "accept": "application/json" },
                    });

                    if (checkResponse.ok) {
                        navigate(`/home/${loginInputValue.trim()}`);
                    } else if (checkResponse.status === 404) {
                        alert("La agenda no existe. Por favor, crea una nueva o verifica el nombre.");
                    } else {
                        console.error("Error al verificar agendas:", checkResponse.status);
                        alert("No se pudo verificar si la agenda existe. Intenta nuevamente.");
                    }
                } catch (error) {
                    console.error("Error en la solicitud:", error.message);
                    alert("Hubo un error al conectar con el servidor. Verifica tu conexión.");
                }
            },

            // HOME
            // carga la lista
            fetchContacts: async (agendaName) => {
                const baseUrl = `${API_BASE_URL}/agendas/${agendaName}`;
                try {
                    const response = await fetch(baseUrl, {
                        method: "GET",
                        headers: {
                            accept: "application/json",
                        },
                    });

                    if (response.ok) {
                        const data = await response.json();
                        setStore({ contacts: data.contacts || [], agendaName });
                    } else {
                        console.error(`Error ${response.status}: No se pudieron obtener los contactos.`);
                        alert("No se pudo cargar la lista de contactos.");
                    }
                } catch (error) {
                    console.error("Error al obtener contactos:", error.message);
                    alert("Hubo un error al conectar con el servidor.");
                }
            },

            // elimiar contacto
            deleteContact: async (contactId) => {
                const store = getStore();
                const agendaName = store.agendaName;
                const deleteUrl = `${API_BASE_URL}/agendas/${agendaName}/contacts/${contactId}`;

                if (!window.confirm("¿Estás seguro de que quieres eliminar este contacto?")) {
                    return;
                }

                try {
                    const response = await fetch(deleteUrl, {
                        method: "DELETE",
                        headers: {
                            accept: "application/json",
                        },
                    });

                    if (response.ok) {
                        const updatedContacts = store.contacts.filter((contact) => contact.id !== contactId);
                        setStore({ contacts: updatedContacts });
                        alert("Contacto eliminado exitosamente.");
                    } else {
                        console.error(`Error ${response.status}: ${response.statusText}`);
                        alert("No se pudo eliminar el contacto.");
                    }
                } catch (error) {
                    console.error("Error al eliminar el contacto:", error.message);
                    alert("Hubo un error al eliminar el contacto.");
                }
            },

            // ADD contact
            addContact: async (agendaName, contactData, navigate) => {
                if (!contactData.name || !contactData.phone || !contactData.email || !contactData.address) {
                    alert("Todos los campos son obligatorios.");
                    return;
                }

                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            ...contactData,
                            agenda_slug: agendaName,
                        }),
                    });

                    if (response.ok) {
                        alert("Contacto creado exitosamente.");
                        navigate(`/home/${agendaName}`);
                    } else {
                        throw new Error("No se pudo crear el contacto.");
                    }
                } catch (error) {
                    console.error("Error al crear el contacto:", error.message);
                    alert("Hubo un problema al intentar crear el contacto.");
                }
            },
        },
    };
};

export default getState;
