from crewai import Agent

researcher = Agent(
    name="ResearcherAgent",
    role="AI Researcher",
    goal="Discover the top 3 AI tools for designers in 2025",
    backstory=(
        "You are a highly skilled technology researcher. "
        "You specialize in identifying cutting-edge AI tools used by creative professionals. "
        "You know where to look and how to evaluate the credibility of sources."
    ),
    tools=["google-search"],  # You can customize your tools if needed
    verbose=True,
    instructions="""
        - Focus on tools released or updated in 2025.
        - Prioritize those with real user reviews or case studies.
        - Output results in bullet points with tool name, function, and a link.
    """
)


writer = Agent(
    name="WriterAgent",
    role="Content Writer",
    goal="Write a clear and engaging blog post based on the researcher’s findings",
    backstory=(
        "You are a seasoned tech blogger who writes in an informative and engaging way. "
        "You simplify technical concepts for creative professionals who may not be tech-savvy."
    ),
    tools=["markdown-formatter"],  # Optional: simulate formatting
    verbose=True,
    instructions="""
        - Start with an intro about the importance of AI for designers.
        - Turn each research bullet into a short paragraph.
        - End with a summary or recommendation section.
        - Use markdown formatting with headers.
    """
)


from crewai import Task, Crew

# Task for the researcher
research_task = Task(
    description="Find the top 3 AI tools that designers are using in 2025.",
    expected_output="A list of 3 AI tools with their features, purpose, and links.",
    agent=researcher
)

# Task for the writer
write_task = Task(
    description="Using the research findings, write a blog post titled 'Top AI Tools for Designers in 2025'",
    expected_output="A well-structured blog post in markdown format.",
    agent=writer,
    context=[research_task]
)

# Create the crew
crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, write_task],
    verbose=True
)

# Kick off the workflow
crew.kickoff()
