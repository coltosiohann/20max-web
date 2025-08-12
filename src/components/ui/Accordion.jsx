import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border border-neutral-200 rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-neutral-50 hover:bg-neutral-100 transition-colors flex items-center justify-between"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} className="text-neutral-600" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-white">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Accordion = ({ items, allowMultiple = false }) => {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      if (!allowMultiple) {
        newOpenItems.clear()
      }
      newOpenItems.add(index)
    }
    
    setOpenItems(newOpenItems)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openItems.has(index)}
          onToggle={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}

export default Accordion