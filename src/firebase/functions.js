import { functions } from '../firebase';

export async function getAllProjects() {
    const func =  functions().httpsCallable("getAllProjects");
    const projects = await func();
    return projects;
};

