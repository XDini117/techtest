<MenuList>{['Tareas', 'Gráfica' ].map((text, index) => (
  <MenuItem>
  <ListItemIcon>{index % 2 === 0 ? <AssignmentIcon /> : <TrendingUpIcon />}</ListItemIcon>
  <Typography variant="inherit" noWrap>{text}</Typography>
  </MenuItem>
))}
</MenuList>
