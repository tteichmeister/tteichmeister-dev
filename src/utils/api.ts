import { getCollection } from "astro:content";

export const getProjects = async (maxCount?: number, includeDrafts: boolean = false) => {
    const projects = (await getCollection('projects')).sort(
        (a, b) => b.data.id - a.data.id
      ).filter(p => includeDrafts || !p.data.draft )
    
      if (maxCount) {
        return projects.slice(0, maxCount)
      }
      return projects
}


export const getWorkExperiences = async (maxCount?: number, includeDrafts: boolean = false) => {
    const workExperiences = (await getCollection('work')).sort(
        (a, b) => b.data.id - a.data.id
      ).filter(p => includeDrafts || !p.data.draft )
    
      if (maxCount) {
        return workExperiences.slice(0, maxCount)
      }
      return workExperiences
}
