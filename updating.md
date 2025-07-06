# Portfolio Update Roadmap

## Overview
This document outlines the implementation roadmap for updating the portfolio projects page with three main tasks:

1. **Task 1**: Update featured projects with Skye and Airviz
2. **Task 2**: Create "In Development" section for BioTraverse
3. **Task 3**: Create "Working Concepts" section for design stage projects

## Task 1: Update Featured Projects

### Current Status
- Featured projects are displayed in the main projects grid
- Projects marked with `featured: true` appear with a star badge
- Currently 4 featured projects: ClarityWire, Luxenest, Shared Voices, Pocketledgerr

### Implementation Steps
1. **Add Skye Project Data**
   - Add to `lib/projects-data.ts`
   - Include GitHub link: https://github.com/Atlas00000/skye
   - Add video link: https://youtube.com/shorts/fIXopEcXTyc
   - Set status as "Live"
   - Mark as featured project

2. **Add Airviz Project Data**
   - Add to `lib/projects-data.ts`
   - Include video link: https://youtu.be/qwSp-_yknwY
   - Include live link: https://airviz.vercel.app/
   - Include GitHub link: https://github.com/Atlas00000/airviz
   - Set status as "Live"
   - Mark as featured project

3. **Update Project Images**
   - Add placeholder images for Skye and Airviz in `/public/projects/`
   - Use consistent naming convention

## Task 2: Create "In Development" Section

### Implementation Steps
1. **Create New Project Status**
   - Add "In Development" as a valid status type
   - Update Project interface in `lib/projects-data.ts`

2. **Add BioTraverse Project**
   - Add to `lib/projects-data.ts`
   - Include GitHub link: https://github.com/Atlas00000/biotraverse-.git
   - Include live link: https://biotraverse.vercel.app/
   - Include video link: https://youtu.be/HSg5_4zmaXo
   - Set status as "In Development"
   - Add placeholder images

3. **Update Projects Page Layout**
   - Modify `app/projects/page.tsx`
   - Add section header for "In Development"
   - Filter projects by status "In Development"
   - Display in separate section above main projects grid

4. **Add Section Styling**
   - Create consistent styling with existing sections
   - Add appropriate animations and transitions
   - Ensure responsive design

## Task 3: Create "Working Concepts" Section

### Implementation Steps
1. **Add New Project Status**
   - Add "Design Stage" as a valid status type
   - Update Project interface

2. **Add Design Stage Projects**
   - **Aerolens**: https://github.com/Atlas00000/aerolens.git
   - **Maresim-tidalflow**: https://github.com/Atlas00000/maresim-tidalflow
   - **Materialize-3d**: https://github.com/Atlas00000/materialize-3d
   - **Seismosphere**: https://github.com/Atlas00000/seismosphere

3. **Enhanced Project Display**
   - Add YouTube video embedding for projects with video links
   - Display more detailed tech stack information
   - Show GitHub repository information
   - Add visual indicators for concept stage

4. **Update Projects Page**
   - Add "Working Concepts" section header
   - Filter projects by status "Design Stage"
   - Implement enhanced card layout with video support
   - Add YouTube iframe integration

5. **Video Integration**
   - Create YouTube embed component
   - Handle video links in project data
   - Add video preview in project cards
   - Implement modal for video viewing

## Technical Implementation Details

### File Structure Updates
```
lib/projects-data.ts          # Add new projects and status types
app/projects/page.tsx         # Update layout and filtering
components/youtube-embed.tsx  # New component for video embedding
```

### Data Structure Updates
```typescript
// Add new status types
status: "Live" | "In Development" | "Completed" | "Design Stage"

// Add video field to Project interface
interface Project {
  // ... existing fields
  video?: string; // YouTube video URL
}
```

### Component Updates
1. **Projects Page Layout**
   - Add section headers with consistent styling
   - Implement status-based filtering
   - Add smooth transitions between sections

2. **Project Cards**
   - Add video preview functionality
   - Enhance tech stack display
   - Add GitHub repository links
   - Implement video modal

3. **YouTube Integration**
   - Create reusable YouTube embed component
   - Handle video URL parsing
   - Add responsive video containers
   - Implement lazy loading for videos

## Implementation Priority

### Phase 1: Foundation (Week 1)
- [ ] Update Project interface with new status types
- [ ] Add Skye and Airviz to featured projects
- [ ] Add BioTraverse to projects data
- [ ] Add design stage projects to data

### Phase 2: Layout Updates (Week 1)
- [ ] Update projects page layout
- [ ] Add section headers
- [ ] Implement status-based filtering
- [ ] Add basic styling for new sections

### Phase 3: Enhanced Features (Week 2)
- [ ] Create YouTube embed component
- [ ] Implement video integration
- [ ] Add enhanced project cards
- [ ] Add video modal functionality

### Phase 4: Polish & Testing (Week 2)
- [ ] Test responsive design
- [ ] Verify video functionality
- [ ] Check accessibility
- [ ] Optimize performance

## Design Considerations

### Visual Consistency
- Maintain existing color scheme and typography
- Use consistent spacing and animations
- Ensure smooth transitions between sections

### User Experience
- Clear section differentiation
- Intuitive video playback
- Responsive design for all screen sizes
- Fast loading times

### Accessibility
- Proper alt text for images
- Keyboard navigation support
- Screen reader compatibility
- Video accessibility features

## Success Criteria

### Task 1 Success
- [ ] Skye and Airviz appear in featured projects
- [ ] All project links work correctly
- [ ] Images display properly
- [ ] Video links are accessible

### Task 2 Success
- [ ] "In Development" section displays correctly
- [ ] BioTraverse appears in the section
- [ ] Section styling matches site theme
- [ ] Smooth animations work

### Task 3 Success
- [ ] "Working Concepts" section displays correctly
- [ ] All design stage projects are included
- [ ] YouTube videos embed properly
- [ ] Enhanced project cards work well
- [ ] Video modal functions correctly

## Notes

- Follow existing code patterns and conventions
- Maintain modular component structure
- Use TypeScript for type safety
- Implement proper error handling
- Test across different browsers and devices
- Optimize for performance and accessibility 