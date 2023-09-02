import React from "react";
import Container from "@mui/system/Container";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProjectCard from "../ProjectCard/projectCard";
import Projects from "../../utils/projectData.json";

const ProjectGrid = (props) => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, paddingTop: "50px"}}>
                <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Projects.map((project) => {
                        return (
                            <ProjectCard
                                key={project.key}
                                title={project.title}
                                image={project.image}
                                intro={project.intro}
                                navLink={project.navLink}
                            />
                        )
                    })
                }
                </Grid>
            </Box>
        </Container>
    )
}

export default ProjectGrid;