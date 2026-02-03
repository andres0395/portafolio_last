import { Page, Text, View, Document, StyleSheet, Font, Link } from '@react-pdf/renderer';
import { about } from '@/utils/about';
import { experiences } from '@/utils/experiences';
import { education } from '@/utils/education';
import { skillCategories } from '@/utils/skills';
import { socialLinks } from '@/utils/socialLinks';
import { projects } from '@/utils/projects';
import { email, phone } from '@/utils/consts/infoContact';
// Register fonts if needed, or use standard fonts
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/helveticaneue/v1/1.ttf' }, // Example fallback, using standard names usually works without src if standard
  ]
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#2563EB', // Blue-600
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937', // Gray-800
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    color: '#2563EB', // Blue-600
    marginBottom: 5,
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    fontSize: 10,
    color: '#4B5563', // Gray-600
  },
  link: {
    color: '#2563EB',
    textDecoration: 'none',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1F2937',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginBottom: 10,
    paddingBottom: 3,
    textTransform: 'uppercase',
  },
  content: {
    fontSize: 10,
    lineHeight: 1.5,
    color: '#374151',
  },
  experienceItem: {
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827',
  },
  company: {
    fontSize: 10,
    fontStyle: 'italic',
    color: '#4B5563',
  },
  date: {
    fontSize: 9,
    color: '#6B7280',
    marginBottom: 3,
  },
  description: {
    fontSize: 10,
    marginTop: 3,
    color: '#374151',
    textAlign: 'justify',
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bullet: {
    width: 10,
    fontSize: 10,
  },
  skillCategory: {
    marginBottom: 5,
  },
  skillType: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#2563EB',
  },
  skillList: {
    fontSize: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    marginRight: 5,
    backgroundColor: '#F3F4F6',
    padding: '2 5',
    borderRadius: 3,
    fontSize: 9,
    marginBottom: 2,
  },
  projectItem: {
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827',
  },
  techStack: {
    fontSize: 9,
    color: '#2563EB',
    marginTop: 2,
  }
});

const CVDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Andrés Felipe Muñoz Acevedo</Text>
        <Text style={styles.title}>{about.subtitle}</Text>
        <View style={styles.contactInfo}>
          {socialLinks.map((link, index) => (
            <Link key={index} src={link.href} style={styles.link}>
              {link.name}
            </Link>
          ))}
          <Link
            src={`mailto:${email}`}
            style={styles.link}>
            {email}
          </Link>
          <Link
            src={`tel:${phone}`}
            style={styles.link}>
            Tel: {phone}
          </Link>
        </View>
      </View>

      {/* Profile */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Perfil Profesional</Text>
        <Text style={styles.content}>{about.description}</Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiencia Laboral</Text>
        {experiences.map((exp, index) => (
          <View key={index} style={styles.experienceItem}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.jobTitle}>{exp.title}</Text>
              <Text style={styles.date}>{exp.period}</Text>
            </View>
            <Text style={styles.company}>{exp.company}</Text>
            <Text style={styles.description}>{exp.description}</Text>
            {exp.achievements && exp.achievements.map((ach, i) => (
              <View key={i} style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={{ flex: 1, fontSize: 10 }}>{ach}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Proyectos Destacados</Text>
        {projects.slice(0, 3).map((proj, index) => (
          <View key={index} style={styles.projectItem}>
            <Text style={styles.projectTitle}>{proj.title}</Text>
            <Text style={styles.description}>{proj.description}</Text>
            <Text style={styles.techStack}>
              {proj.technologies.join(' • ')}
            </Text>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
        {skillCategories.map((cat, index) => (
          <View key={index} style={styles.skillCategory}>
            <Text style={styles.skillType}>{cat.title}</Text>
            <View style={styles.skillList}>
              {cat.skills.map((skill, i) => (
                <Text key={i} style={styles.skillItem}>{skill.name}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Educación</Text>
        {education.map((edu, index) => (
          <View key={index} style={styles.experienceItem}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.jobTitle}>{edu.degree}</Text>
              <Text style={styles.date}>{edu.period}</Text>
            </View>
            <Text style={styles.company}>{edu.institution}</Text>
            <Text style={styles.description}>{edu.description}</Text>
          </View>
        ))}
      </View>

    </Page>
  </Document>
);

export default CVDocument;
