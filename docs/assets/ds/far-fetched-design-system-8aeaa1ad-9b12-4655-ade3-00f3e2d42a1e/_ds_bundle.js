/* @ds-bundle: {"format":4,"namespace":"FarFetchedDesignSystem_8aeaa1","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/feedback/Tabs.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"1a4164def828","components/core/Button.jsx":"96537c487966","components/core/Card.jsx":"37f1d3f9a902","components/core/IconButton.jsx":"32e61369dfc3","components/core/Tag.jsx":"d55d77639e0d","components/feedback/Dialog.jsx":"aad2a608f956","components/feedback/Tabs.jsx":"c43aa7132d07","components/feedback/Toast.jsx":"f618abd486c5","components/feedback/Tooltip.jsx":"bceb10f67279","components/forms/Checkbox.jsx":"a0d80396c61e","components/forms/Input.jsx":"fe7ff62eb3ac","components/forms/Radio.jsx":"d04dcda53501","components/forms/Select.jsx":"269c5e614e74","components/forms/Switch.jsx":"5f1c3b5cd7d8","ui_kits/advisory/About.jsx":"3fa8813c7d9d","ui_kits/advisory/Chrome.jsx":"7a311bc495fd","ui_kits/advisory/Contact.jsx":"f94c52fc43c9","ui_kits/advisory/Home.jsx":"0e5b8b72c7a6","ui_kits/advisory/Labs.jsx":"2061574e785a","ui_kits/labs/CatalogTable.jsx":"2c14c68be2f5","ui_kits/labs/DealsBoard.jsx":"80f5748a40f0","ui_kits/labs/Sidebar.jsx":"3b21f09c7bef","ui_kits/labs/Topbar.jsx":"556e1018c17a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FarFetchedDesignSystem_8aeaa1 = window.FarFetchedDesignSystem_8aeaa1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  children
}) {
  const tones = {
    neutral: {
      background: 'var(--surface-card-raised)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-default)'
    },
    accent: {
      background: 'var(--accent-subtle)',
      color: 'var(--blue-300)',
      border: '1px solid var(--border-accent)'
    },
    success: {
      background: 'rgba(34,197,94,0.14)',
      color: 'var(--success-300)',
      border: '1px solid rgba(34,197,94,0.35)'
    },
    warning: {
      background: 'rgba(245,185,66,0.14)',
      color: 'var(--warning-300)',
      border: '1px solid rgba(245,185,66,0.35)'
    },
    danger: {
      background: 'rgba(242,86,75,0.14)',
      color: 'var(--danger-300)',
      border: '1px solid rgba(242,86,75,0.35)'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  onClick,
  type = 'button'
}) {
  const sizes = {
    sm: {
      padding: '6px 14px',
      font: 'var(--text-body-s)',
      gap: 6,
      radius: 'var(--radius-sm)'
    },
    md: {
      padding: '10px 20px',
      font: 'var(--text-body-m)',
      gap: 8,
      radius: 'var(--radius-md)'
    },
    lg: {
      padding: '13px 26px',
      font: 'var(--text-body-l)',
      gap: 10,
      radius: 'var(--radius-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'var(--surface-card-raised)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent'
    },
    danger: {
      background: 'var(--danger-500)',
      color: '#fff',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.primary;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: s.padding,
    font: s.font,
    fontWeight: 600,
    borderRadius: s.radius,
    whiteSpace: 'nowrap',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
    ...v
  };
  return React.createElement('button', {
    type,
    disabled,
    onClick,
    style,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  padding = 'md',
  raised = false,
  hover = false,
  children,
  style = {}
}) {
  const pads = {
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  return React.createElement('div', {
    style: {
      background: raised ? 'var(--surface-card-raised)' : 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding] || pads.md,
      boxShadow: 'var(--shadow-md)',
      transition: hover ? 'transform var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-standard)' : undefined,
      ...style
    },
    onMouseEnter: hover ? e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.borderColor = 'var(--border-accent)';
    } : undefined,
    onMouseLeave: hover ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
    } : undefined
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  ariaLabel,
  onClick,
  active = false
}) {
  const dims = {
    sm: 28,
    md: 36,
    lg: 44
  };
  const d = dims[size] || dims.md;
  const variants = {
    ghost: {
      background: active ? 'var(--accent-subtle)' : 'transparent',
      color: active ? 'var(--accent-hover)' : 'var(--text-secondary)'
    },
    solid: {
      background: 'var(--surface-card-raised)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)'
    }
  };
  const v = variants[variant] || variants.ghost;
  return React.createElement('button', {
    'aria-label': ariaLabel,
    onClick,
    style: {
      width: d,
      height: d,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)',
      ...v
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px 4px 12px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-card-raised)',
      color: 'var(--text-primary)',
      font: 'var(--text-body-s)',
      border: '1px solid var(--border-subtle)'
    }
  }, children, onRemove && React.createElement('button', {
    onClick: onRemove,
    'aria-label': 'Remove',
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-tertiary)',
      cursor: 'pointer',
      font: 'var(--text-body-s)',
      padding: 0,
      lineHeight: 1
    }
  }, '×'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  footer
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(var(--blur-panel))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50
    },
    onClick: onClose
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      width: 420,
      background: 'var(--surface-card-raised)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
      padding: 'var(--space-6)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--text-heading-s)',
      color: 'var(--text-primary)'
    }
  }, title), React.createElement('button', {
    onClick: onClose,
    'aria-label': 'Close',
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-tertiary)',
      cursor: 'pointer',
      fontSize: 18
    }
  }, '×')), React.createElement('div', {
    style: {
      font: 'var(--text-body-m)',
      color: 'var(--text-secondary)'
    }
  }, children), footer && React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      marginTop: 20
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tabs.jsx
try { (() => {
const {
  useState
} = React;
function Tabs({
  tabs = [],
  defaultValue
}) {
  const [active, setActive] = useState(defaultValue || tabs[0] && tabs[0].value);
  const activeTab = tabs.find(t => t.value === active);
  return React.createElement('div', null, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, tabs.map(t => React.createElement('button', {
    key: t.value,
    onClick: () => setActive(t.value),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 16px',
      font: 'var(--text-body-m)',
      fontWeight: 600,
      color: active === t.value ? 'var(--text-primary)' : 'var(--text-tertiary)',
      borderBottom: `2px solid ${active === t.value ? 'var(--accent)' : 'transparent'}`,
      marginBottom: -1,
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, t.label))), activeTab && React.createElement('div', {
    style: {
      padding: '16px 0',
      color: 'var(--text-secondary)',
      font: 'var(--text-body-m)'
    }
  }, activeTab.content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'neutral',
  title,
  description,
  onClose
}) {
  const tones = {
    neutral: 'var(--ink-500)',
    accent: 'var(--accent)',
    success: 'var(--success-500)',
    warning: 'var(--warning-500)',
    danger: 'var(--danger-500)'
  };
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      width: 340,
      background: 'var(--surface-card-raised)',
      border: '1px solid var(--border-default)',
      borderLeft: `3px solid ${tones[tone]}`,
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      boxShadow: 'var(--shadow-lg)'
    }
  }, React.createElement('div', {
    style: {
      flex: 1
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--text-body-m)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, title), description && React.createElement('div', {
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, description)), onClose && React.createElement('button', {
    onClick: onClose,
    'aria-label': 'Dismiss',
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-tertiary)',
      cursor: 'pointer',
      fontSize: 16,
      lineHeight: 1
    }
  }, '×'));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  side = 'top'
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  };
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    style: {
      position: 'absolute',
      ...pos[side],
      zIndex: 20,
      whiteSpace: 'nowrap',
      background: 'var(--ink-950)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '6px 10px',
      font: 'var(--text-caption)',
      boxShadow: 'var(--shadow-md)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-xs)',
      border: `1px solid ${checked ? 'var(--accent)' : 'var(--border-default)'}`,
      background: checked ? 'var(--accent)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
    }
  }, checked && React.createElement('svg', {
    width: 12,
    height: 12,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#f4f9ff',
    strokeWidth: 3
  }, React.createElement('path', {
    d: 'M20 6 9 17l-5-5'
  }))), label && React.createElement('span', {
    style: {
      font: 'var(--text-body-m)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  disabled = false,
  iconLeft = null
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%'
    }
  }, label && React.createElement('span', {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-secondary)',
      textTransform: 'uppercase'
    }
  }, label), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--danger-500)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '10px 14px',
      opacity: disabled ? 0.5 : 1,
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }, iconLeft, React.createElement('input', {
    type,
    placeholder,
    value,
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      width: '100%',
      font: 'var(--text-body-m)',
      color: 'var(--text-primary)'
    }
  })), error && React.createElement('span', {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--danger-300)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(true),
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: `1px solid ${checked ? 'var(--accent)' : 'var(--border-default)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }, checked && React.createElement('span', {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--accent)'
    }
  })), label && React.createElement('span', {
    style: {
      font: 'var(--text-body-m)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useState,
  useRef,
  useEffect
} = React;
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select…'
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  const selected = options.find(o => o.value === value);
  return React.createElement('div', {
    ref,
    style: {
      position: 'relative',
      width: '100%'
    }
  }, label && React.createElement('span', {
    style: {
      display: 'block',
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-secondary)',
      textTransform: 'uppercase',
      marginBottom: 6
    }
  }, label), React.createElement('button', {
    type: 'button',
    onClick: () => setOpen(!open),
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 14px',
      font: 'var(--text-body-m)',
      color: selected ? 'var(--text-primary)' : 'var(--text-tertiary)',
      cursor: 'pointer'
    }
  }, selected ? selected.label : placeholder, React.createElement('span', {
    style: {
      color: 'var(--text-tertiary)',
      fontSize: 10
    }
  }, '▾')), open && React.createElement('div', {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      marginTop: 4,
      zIndex: 10,
      background: 'var(--surface-card-raised)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden'
    }
  }, options.map(o => React.createElement('div', {
    key: o.value,
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
    },
    style: {
      padding: '9px 14px',
      font: 'var(--text-body-m)',
      cursor: 'pointer',
      color: o.value === value ? 'var(--blue-300)' : 'var(--text-primary)',
      background: o.value === value ? 'var(--accent-subtle)' : 'transparent'
    }
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 36,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      padding: 2,
      background: checked ? 'var(--accent)' : 'var(--ink-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: checked ? 'flex-end' : 'flex-start',
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, React.createElement('span', {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform var(--duration-base) var(--ease-standard)'
    }
  })), label && React.createElement('span', {
    style: {
      font: 'var(--text-body-m)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/advisory/About.jsx
try { (() => {
function AboutPage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 48px 120px',
      maxWidth: 900,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--blue-300)',
      marginBottom: 16
    }
  }, "About"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-display-m)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)',
      marginBottom: 36
    }
  }, "Jesse Cary"), /*#__PURE__*/React.createElement("img", {
    src: "assets/banner-image-jesse.png",
    alt: "Jesse Cary at BITR Conference",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-l)',
      color: 'var(--text-secondary)',
      lineHeight: 1.75,
      marginBottom: 32
    }
  }, "Jesse Cary is a seasoned professional with expertise in advisory and consulting services. With a strong background in strategic planning, business development, and leadership, Jesse has helped organizations achieve their goals and navigate complex challenges."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)',
      boxShadow: 'var(--shadow-md)',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-s)',
      color: 'var(--text-primary)',
      marginBottom: 14
    }
  }, "Background"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-m)',
      color: 'var(--text-secondary)'
    }
  }, "15+ years building and scaling high-performance platforms in regulated industries \u2014 iGaming, fintech, and other regulated sectors. Former VP of Engineering turned strategic advisor, now leading Far Fetched Advisory and Consulting.")), /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/jessecary",
    target: "_blank",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--text-link)',
      font: 'var(--text-body-m)',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      textDecoration: 'none'
    }
  }, "Connect on LinkedIn \u2192"));
}
window.AboutPage = AboutPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/advisory/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/advisory/Chrome.jsx
try { (() => {
function Nav({
  active,
  onNav
}) {
  const links = [{
    key: 'home',
    label: 'Home'
  }, {
    key: 'about',
    label: 'About'
  }, {
    key: 'labs',
    label: 'Far Fetched Labs'
  }, {
    key: 'contact',
    label: 'Contact'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 48px',
      position: 'sticky',
      top: 0,
      background: 'rgba(10,15,26,0.85)',
      backdropFilter: 'blur(var(--blur-panel))',
      zIndex: 40,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNav('home'),
    style: {
      cursor: 'pointer',
      font: '700 1.25rem/1 var(--font-sans)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Far Fetched"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.key,
    onClick: () => onNav(l.key),
    style: {
      cursor: 'pointer',
      padding: '8px 16px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--text-body-s)',
      fontWeight: active === l.key ? 600 : 400,
      color: active === l.key ? 'var(--text-primary)' : 'var(--text-secondary)',
      background: active === l.key ? 'var(--accent-subtle)' : 'transparent',
      whiteSpace: 'nowrap',
      transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)'
    },
    onMouseEnter: e => {
      if (active !== l.key) e.currentTarget.style.color = 'var(--text-primary)';
    },
    onMouseLeave: e => {
      if (active !== l.key) e.currentTarget.style.color = 'var(--text-secondary)';
    }
  }, l.label)), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@farfetched.ltd",
    style: {
      marginLeft: 8,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      borderRadius: 'var(--radius-md)',
      padding: '9px 18px',
      font: 'var(--text-body-s)',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      display: 'inline-block'
    }
  }, "Get in touch"))));
}
function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 48px',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'var(--text-tertiary)',
      font: 'var(--text-body-s)',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, "Far-Fetched Advisory and Consulting \u2014 info@farfetched.ltd"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onNav('about'),
    style: {
      cursor: 'pointer'
    }
  }, "About"), /*#__PURE__*/React.createElement("span", {
    onClick: () => onNav('labs'),
    style: {
      cursor: 'pointer'
    }
  }, "Far Fetched Labs"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/jessecary",
    target: "_blank",
    style: {
      color: 'var(--text-link)'
    }
  }, "LinkedIn")));
}
window.Nav = Nav;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/advisory/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/advisory/Contact.jsx
try { (() => {
function ContactPage() {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  function validate(v) {
    const e = {};
    if (!v.name.trim()) e.name = 'Please enter your name.';
    if (!v.email.trim()) e.email = 'Please enter your email.';else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "That email doesn't look right.";
    if (!v.message.trim()) e.message = 'Tell us a little about what you need.';
    return e;
  }
  function handleChange(field, val) {
    const next = {
      ...values,
      [field]: val
    };
    setValues(next);
    if (errors[field]) setErrors(validate(next));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  }
  const fieldStyle = hasError => ({
    width: '100%',
    boxSizing: 'border-box',
    background: 'var(--surface-card)',
    border: `1px solid ${hasError ? 'var(--danger-500)' : 'var(--border-default)'}`,
    borderRadius: 'var(--radius-md)',
    padding: '11px 14px',
    font: 'var(--text-body-m)',
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'border-color var(--duration-fast) var(--ease-standard)'
  });
  if (submitted) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '140px 48px',
        maxWidth: 640,
        margin: '0 auto',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: 'var(--accent-subtle)',
        border: '1px solid var(--border-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 24px',
        color: 'var(--blue-300)'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--text-heading-m)',
        color: 'var(--text-primary)',
        marginBottom: 12
      }
    }, "Message sent"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--text-body-m)',
        color: 'var(--text-secondary)',
        marginBottom: 28
      }
    }, "Thanks, ", values.name.split(' ')[0], " \u2014 we'll get back to you at ", values.email, " shortly."), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        setSubmitted(false);
        setValues({
          name: '',
          email: '',
          message: ''
        });
      },
      style: {
        background: 'transparent',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-md)',
        padding: '11px 22px',
        font: 'var(--text-body-m)',
        fontWeight: 600,
        whiteSpace: 'nowrap',
        cursor: 'pointer'
      }
    }, "Send another message"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 48px 120px',
      maxWidth: 640,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--blue-300)',
      marginBottom: 16
    }
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-display-m)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)',
      marginBottom: 16
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-l)',
      color: 'var(--text-secondary)',
      marginBottom: 44
    }
  }, "Reach out to Far-Fetched Ltd for consultancy, collaboration, or inquiries."), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      marginBottom: 44
    },
    noValidate: true
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    value: values.name,
    onChange: e => handleChange('name', e.target.value),
    style: fieldStyle(errors.name),
    placeholder: "Your name"
  }), errors.name && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--danger-300)'
    }
  }, errors.name)), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    value: values.email,
    onChange: e => handleChange('email', e.target.value),
    style: fieldStyle(errors.email),
    placeholder: "you@company.com"
  }), errors.email && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--danger-300)'
    }
  }, errors.email)), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    value: values.message,
    onChange: e => handleChange('message', e.target.value),
    rows: 5,
    style: {
      ...fieldStyle(errors.message),
      resize: 'vertical',
      fontFamily: 'inherit'
    },
    placeholder: "What are you working on?"
  }), errors.message && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--danger-300)'
    }
  }, errors.message)), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: submitting,
    style: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '13px 26px',
      font: 'var(--text-body-l)',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      cursor: submitting ? 'not-allowed' : 'pointer',
      opacity: submitting ? 0.6 : 1,
      alignSelf: 'flex-start'
    }
  }, submitting ? 'Sending…' : 'Send message')), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-tertiary)'
    }
  }, "Prefer to talk it through?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://calendly.com/jessecary/30min",
    target: "_blank",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card-raised)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '11px 20px',
      font: 'var(--text-body-s)',
      fontWeight: 600,
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap'
    }
  }, "Schedule 30-minute intro call")), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@farfetched.ltd",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'transparent',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '11px 20px',
      font: 'var(--text-body-s)',
      fontWeight: 600,
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap'
    }
  }, "info@farfetched.ltd")))));
}
window.ContactPage = ContactPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/advisory/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/advisory/Home.jsx
try { (() => {
const trustLogos = [{
  src: 'assets/betty-ca-logo.svg',
  name: 'Betty.ca'
}, {
  src: 'assets/evolution-gaming-logo.svg',
  name: 'Evolution Gaming'
}, {
  src: 'assets/pragmatic-play-logo.svg',
  name: 'Pragmatic Play'
}, {
  src: 'assets/pointsbet-logo.svg',
  name: 'PointsBet'
}, {
  src: 'assets/amazon-aws-logo.svg',
  name: 'AWS'
}, {
  src: 'assets/microsoft-azure-logo.svg',
  name: 'Microsoft Azure'
}];
const services = [{
  title: 'Strategic Advisory',
  body: 'Technical roadmaps and platform architecture guidance for sustainable growth.'
}, {
  title: 'Platform Architecture',
  body: 'Design and optimize high-performance systems for scale and compliance.'
}, {
  title: 'Team Scaling',
  body: 'Build and structure engineering teams for rapid, sustainable growth.'
}, {
  title: 'Leadership Development',
  body: 'Develop technical leadership capabilities across your organization.'
}];
const caseTabs = [{
  key: 'challenge',
  label: 'Challenge',
  body: 'Needed to improve player engagement, retention, and revenue predictability while preparing for rapid growth and greater system flexibility. Required real-time segmentation, live rewards, and seamless integration with external CRM tools.'
}, {
  key: 'solution',
  label: 'Solution',
  body: /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("li", null, "Designed a dynamic segmentation framework using decayed revenue models, churn risk, and behavioral insights for accurate player tiering."), /*#__PURE__*/React.createElement("li", null, "Defined real-time session logic to power immediate rewards and boost engagement."), /*#__PURE__*/React.createElement("li", null, "Developed simulation/planning tools for cross-team decision-making."), /*#__PURE__*/React.createElement("li", null, "Led architecture and integration strategy for new audience/reward services and CRM migration, balancing flexibility with delivery speed."))
}, {
  key: 'result',
  label: 'Result',
  body: /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("li", null, "Oversaw the implementation of the first phase segmentation system."), /*#__PURE__*/React.createElement("li", null, "Delivered a highly detailed solution including architectural roadmap, tightly aligned with the company's product revenue goals and strategic priorities."), /*#__PURE__*/React.createElement("li", null, "Laid the foundation for scalable growth and future innovation."))
}];
function useReveal() {
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setShown(true), 30);
    return () => clearTimeout(t);
  }, []);
  return shown;
}
function Hero({
  onNav
}) {
  const shown = useReveal();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '120px 48px 100px',
      maxWidth: 920,
      opacity: shown ? 1 : 0,
      transform: shown ? 'translateY(0)' : 'translateY(14px)',
      transition: 'opacity 500ms var(--ease-out), transform 500ms var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--blue-300)',
      marginBottom: 20
    }
  }, "Strategic engineering leadership"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-display-l)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)',
      marginBottom: 24
    }
  }, "Scaling ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'normal',
      color: 'var(--foam-400)'
    }
  }, "platforms"), " and ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'normal',
      color: 'var(--foam-400)'
    }
  }, "teams"), " for ambitious digital companies"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-l)',
      color: 'var(--text-secondary)',
      maxWidth: 620,
      marginBottom: 36
    }
  }, "Strategic engineering leadership that drives growth, performance, and results."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('about'),
    style: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '13px 26px',
      font: 'var(--text-body-l)',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      boxShadow: 'var(--glow-accent)',
      transition: 'transform var(--duration-fast) var(--ease-standard)'
    },
    onMouseDown: e => e.currentTarget.style.transform = 'scale(0.97)',
    onMouseUp: e => e.currentTarget.style.transform = 'scale(1)',
    onMouseLeave: e => e.currentTarget.style.transform = 'scale(1)'
  }, "Learn more"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('contact'),
    style: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '13px 26px',
      font: 'var(--text-body-l)',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      cursor: 'pointer'
    }
  }, "Get in touch")));
}
function TrustSignals() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 48px 90px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-m)',
      color: 'var(--text-primary)',
      maxWidth: 760,
      marginBottom: 36
    }
  }, "Trusted by Tier 1 gaming platforms across North America & Europe"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      marginBottom: 44
    }
  }, [{
    value: 'Casino',
    label: 'Platform Design'
  }, {
    value: 'B2B',
    label: 'Technical Solution Sales'
  }, {
    value: '15+',
    label: 'Years in High-Scale Platforms'
  }].map(m => /*#__PURE__*/React.createElement("div", {
    key: m.label,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 2.25rem/1 var(--font-sans)',
      color: 'var(--foam-400)',
      marginBottom: 8
    }
  }, m.value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-secondary)'
    }
  }, m.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-tertiary)',
      marginBottom: 20,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, "Trusted by leading companies in regulated digital platforms"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, trustLogos.map(l => /*#__PURE__*/React.createElement("img", {
    key: l.name,
    src: l.src,
    alt: l.name,
    title: l.name,
    style: {
      height: 32,
      opacity: 0.75,
      filter: 'grayscale(0.15)',
      transition: 'opacity var(--duration-base) var(--ease-standard)'
    },
    onMouseEnter: e => e.currentTarget.style.opacity = 1,
    onMouseLeave: e => e.currentTarget.style.opacity = 0.75
  }))));
}
function Expertise() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 48px 100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-l)',
      color: 'var(--text-primary)',
      marginBottom: 32
    }
  }, "Specialists in regulated digital platforms"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 20,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card-raised)',
      border: '1px solid var(--border-accent)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--blue-300)',
      marginBottom: 14
    }
  }, "Sweet spot"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-m)',
      color: 'var(--text-primary)',
      marginBottom: 14
    }
  }, "iGaming"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-m)',
      color: 'var(--text-secondary)'
    }
  }, "Deep expertise in high-performance gaming platforms, regulatory compliance, and real-time systems that handle millions of concurrent users.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)',
      marginBottom: 14
    }
  }, "Extended reach"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-m)',
      color: 'var(--text-primary)',
      marginBottom: 14
    }
  }, "Other regulated sectors"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-m)',
      color: 'var(--text-secondary)'
    }
  }, "Open to ambitious digital companies in fintech, e-commerce, and other regulated sectors requiring scalable platform architecture."))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-l)',
      color: 'var(--text-primary)',
      borderLeft: '2px solid var(--accent)',
      paddingLeft: 20
    }
  }, "Combining technical depth with strategic leadership to help regulated platforms scale without compromising performance or compliance."));
}
function Services() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 48px 100px',
      background: 'var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-l)',
      color: 'var(--text-primary)',
      marginBottom: 32
    }
  }, "How we drive results"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, services.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px',
      boxShadow: 'var(--shadow-md)',
      cursor: 'default',
      transition: 'transform var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-standard)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.borderColor = 'var(--border-accent)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-mono-s)',
      color: 'var(--text-tertiary)',
      marginBottom: 16
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-s)',
      color: 'var(--text-primary)',
      marginBottom: 10
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-secondary)'
    }
  }, s.body)))));
}
function CaseStudy() {
  const [tab, setTab] = React.useState('challenge');
  const active = caseTabs.find(t => t.key === tab);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 48px 100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-l)',
      color: 'var(--text-primary)',
      marginBottom: 32
    }
  }, "Recent client case study"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 24,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-m)',
      color: 'var(--text-primary)',
      marginBottom: 8
    }
  }, "Betty.ca \u2014 Advanced Player Segmentation & Platform Optimization"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-mono-s)',
      color: 'var(--text-tertiary)'
    }
  }, "iGaming Platform \xB7 March\u2013July 2025")), /*#__PURE__*/React.createElement("img", {
    src: "assets/betty-ca-logo.svg",
    alt: "Betty.ca",
    style: {
      height: 36
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: 24
    }
  }, caseTabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.key,
    onClick: () => setTab(t.key),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 16px',
      font: 'var(--text-body-m)',
      fontWeight: 600,
      color: tab === t.key ? 'var(--text-primary)' : 'var(--text-tertiary)',
      borderBottom: `2px solid ${tab === t.key ? 'var(--accent)' : 'transparent'}`,
      marginBottom: -1,
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-m)',
      color: 'var(--text-secondary)',
      lineHeight: 1.7
    }
  }, active.body)));
}
function LabsTeaser({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 48px 100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, var(--ink-800), var(--ink-900))',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-10)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--foam-400)',
      marginBottom: 16
    }
  }, "Incubator"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-l)',
      color: 'var(--text-primary)',
      marginBottom: 16,
      maxWidth: 640
    }
  }, "Far Fetched Labs: from concept to prototype"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-m)',
      color: 'var(--text-secondary)',
      maxWidth: 640,
      marginBottom: 28
    }
  }, "Our incubator partners with visionaries who want to explore the edge of what is possible, rapidly transforming far-fetched concepts into tangible prototypes and market-ready narratives."), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('labs'),
    style: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '11px 22px',
      font: 'var(--text-body-m)',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      cursor: 'pointer'
    }
  }, "Explore Far Fetched Labs \u2192")));
}
function AboutTeaser({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 48px 100px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-l)',
      color: 'var(--text-primary)',
      marginBottom: 16
    }
  }, "Strategic engineering leadership"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-l)',
      color: 'var(--text-secondary)',
      marginBottom: 20
    }
  }, "15+ years building and scaling high-performance platforms in regulated industries. Former VP of Engineering turned strategic advisor."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '2px solid var(--border-accent)',
      paddingLeft: 18,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--blue-300)',
      marginBottom: 8
    }
  }, "Leadership philosophy"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-m)',
      color: 'var(--text-secondary)'
    }
  }, "Great platforms aren't just about technology\u2014they're about people, processes, and strategic thinking. I help ambitious companies build the foundation for sustainable growth.")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('about'),
    style: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '11px 22px',
      font: 'var(--text-body-m)',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      cursor: 'pointer'
    }
  }, "Learn more about Jesse \u2192")), /*#__PURE__*/React.createElement("img", {
    src: "assets/banner-image-jesse.png",
    alt: "Jesse Cary at BITR Conference",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)'
    }
  }));
}
function ClosingCTA({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '100px 48px 120px',
      textAlign: 'center',
      background: 'var(--surface-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-l)',
      color: 'var(--text-primary)',
      marginBottom: 16
    }
  }, "Ready to scale your platform and team?"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-l)',
      color: 'var(--text-secondary)',
      marginBottom: 36
    }
  }, "Let's discuss how strategic engineering leadership can drive your growth."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('contact'),
    style: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '13px 26px',
      font: 'var(--text-body-l)',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      boxShadow: 'var(--glow-accent)'
    }
  }, "Schedule 30-minute intro call"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@farfetched.ltd",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '13px 26px',
      font: 'var(--text-body-l)',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      cursor: 'pointer'
    }
  }, "Send email")), /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/jessecary",
    target: "_blank",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      color: 'var(--text-link)',
      border: 'none',
      padding: '13px 10px',
      font: 'var(--text-body-l)',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      cursor: 'pointer'
    }
  }, "Connect on LinkedIn"))));
}
function Home({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(TrustSignals, null), /*#__PURE__*/React.createElement(Expertise, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(CaseStudy, null), /*#__PURE__*/React.createElement(LabsTeaser, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(AboutTeaser, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(ClosingCTA, {
    onNav: onNav
  }));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/advisory/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/advisory/Labs.jsx
try { (() => {
const labsSteps = [{
  n: '01',
  title: 'Discovery',
  body: 'Rapid concept discovery sessions to surface the opportunity, technical constraints, and success metrics.'
}, {
  n: '02',
  title: 'Prototype',
  body: 'Accelerated prototyping that combines product visioning, architecture, and user narratives in weeks—not quarters.'
}, {
  n: '03',
  title: 'Momentum',
  body: 'Partner enablement materials that help you secure stakeholder approval, budget, and first customers.'
}];
function LabsPage({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 48px 120px',
      maxWidth: 1000,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--foam-400)',
      marginBottom: 16
    }
  }, "Incubator"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-display-m)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)',
      marginBottom: 28,
      maxWidth: 760
    }
  }, "Far Fetched Labs"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-l)',
      color: 'var(--text-secondary)',
      maxWidth: 760,
      marginBottom: 56
    }
  }, "Far Fetched Labs is the incubator arm of Far Fetched Ltd\u2014built for founders, operators, and innovation teams who want to move faster than their internal roadmap allows. We co-create with potential partners to pressure-test ideas, frame the opportunity, and produce tangible proof-of-value assets that unlock momentum."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-m)',
      color: 'var(--text-primary)',
      marginBottom: 28
    }
  }, "How we work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 0,
      borderTop: '1px solid var(--border-subtle)',
      marginBottom: 64
    }
  }, labsSteps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      padding: '28px 24px 0',
      borderRight: i < 2 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-mono-s)',
      color: 'var(--text-tertiary)',
      marginBottom: 14
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-s)',
      color: 'var(--text-primary)',
      marginBottom: 10
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-secondary)'
    }
  }, s.body)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card-raised)',
      border: '1px solid var(--border-accent)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)',
      boxShadow: 'var(--shadow-md)',
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--blue-300)',
      marginBottom: 14
    }
  }, "Current incubation project"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-s)',
      color: 'var(--text-primary)',
      marginBottom: 12
    }
  }, "AI-driven insurance brokerage platform"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-m)',
      color: 'var(--text-secondary)'
    }
  }, "We are actively developing a platform that transforms how policies are matched, priced, and serviced. The goal is to help carriers and agents personalize offers, automate servicing, and create a data-powered customer journey that keeps pace with modern expectations.")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-s)',
      color: 'var(--text-primary)',
      marginBottom: 20
    }
  }, "Curious about partnering, or have a far-fetched idea of your own?"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('contact'),
    style: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '13px 26px',
      font: 'var(--text-body-l)',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      boxShadow: 'var(--glow-accent)'
    }
  }, "Let's start the conversation")));
}
window.LabsPage = LabsPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/advisory/Labs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/labs/CatalogTable.jsx
try { (() => {
const catalogRows = [{
  asset: 'Midnight Coast — album masters',
  type: 'Music',
  status: 'Licensed',
  territory: 'Worldwide',
  id: 'FF-2026-00417'
}, {
  asset: 'Harborline (2019 film)',
  type: 'Film',
  status: 'Pending',
  territory: 'NA/EMEA',
  id: 'FF-2026-00418'
}, {
  asset: 'Driftwood™ brand mark',
  type: 'Trademark',
  status: 'Licensed',
  territory: 'APAC',
  id: 'FF-2025-00392'
}, {
  asset: 'Tidepool routing patent',
  type: 'Patent',
  status: 'In review',
  territory: 'US',
  id: 'FF-2025-00381'
}, {
  asset: 'Saltwater (podcast catalog)',
  type: 'Audio',
  status: 'Licensed',
  territory: 'Worldwide',
  id: 'FF-2026-00402'
}];
const statusTone = {
  Licensed: 'success',
  Pending: 'warning',
  'In review': 'neutral'
};
function CatalogTable() {
  const {
    Badge
  } = window.FarFetchedDesignSystem_8aeaa1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2.2fr 0.8fr 0.9fr 0.9fr 1.1fr',
      padding: '0 14px 10px',
      font: 'var(--text-caption)',
      color: 'var(--text-tertiary)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Asset"), /*#__PURE__*/React.createElement("div", null, "Type"), /*#__PURE__*/React.createElement("div", null, "Status"), /*#__PURE__*/React.createElement("div", null, "Territory"), /*#__PURE__*/React.createElement("div", null, "Deal ID")), catalogRows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '2.2fr 0.8fr 0.9fr 0.9fr 1.1fr',
      alignItems: 'center',
      padding: '14px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-card)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-m)',
      color: 'var(--text-primary)'
    }
  }, r.asset), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-secondary)'
    }
  }, r.type), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: statusTone[r.status]
  }, r.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-secondary)'
    }
  }, r.territory), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-mono-s)',
      color: 'var(--text-tertiary)'
    }
  }, r.id))));
}
window.CatalogTable = CatalogTable;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/labs/CatalogTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/labs/DealsBoard.jsx
try { (() => {
const deals = [{
  name: 'Midnight Coast sync package',
  stage: 'Closed',
  value: '$240,000',
  holder: 'Coastal Records'
}, {
  name: 'Harborline streaming rights',
  stage: 'Negotiation',
  value: '$1.2M',
  holder: 'Tidewater Films'
}, {
  name: 'Driftwood™ apparel license',
  stage: 'Offer sent',
  value: '$85,000',
  holder: 'Northshore Goods'
}];
const stageTone = {
  Closed: 'success',
  Negotiation: 'accent',
  'Offer sent': 'warning'
};
function DealsBoard() {
  const {
    Badge,
    Card
  } = window.FarFetchedDesignSystem_8aeaa1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, deals.map(d => /*#__PURE__*/React.createElement(Card, {
    key: d.name,
    hover: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-s)',
      color: 'var(--text-primary)',
      marginBottom: 6
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-s)',
      color: 'var(--text-secondary)'
    }
  }, d.holder)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-s)',
      color: 'var(--text-primary)'
    }
  }, d.value), /*#__PURE__*/React.createElement(Badge, {
    tone: stageTone[d.stage]
  }, d.stage))))));
}
window.DealsBoard = DealsBoard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/labs/DealsBoard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/labs/Sidebar.jsx
try { (() => {
function Icon({
  d,
  size = 18
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
const icons = {
  catalog: 'M4 6h16M4 12h16M4 18h7',
  deals: 'M3 3v18h18M18 9l-5 5-4-4-4 4',
  holders: 'M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z'
};
function Sidebar({
  active,
  onNav
}) {
  const items = [{
    key: 'catalog',
    label: 'Catalog'
  }, {
    key: 'deals',
    label: 'Deals'
  }, {
    key: 'holders',
    label: 'Rights holders'
  }, {
    key: 'settings',
    label: 'Settings'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      minWidth: 220,
      background: 'var(--surface-canvas)',
      borderRight: '1px solid var(--border-subtle)',
      padding: '20px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 1.05rem/1 var(--font-sans)',
      color: 'var(--text-primary)',
      padding: '8px 12px 20px'
    }
  }, "Far Fetched Labs"), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.key,
    onClick: () => onNav(it.key),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '9px 12px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      color: active === it.key ? 'var(--text-primary)' : 'var(--text-secondary)',
      background: active === it.key ? 'var(--accent-subtle)' : 'transparent',
      font: 'var(--text-body-s)',
      fontWeight: active === it.key ? 600 : 400
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: icons[it.key],
    size: 16
  }), it.label)));
}
window.Sidebar = Sidebar;
window.LabsIcon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/labs/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/labs/Topbar.jsx
try { (() => {
function Topbar({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 28px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-heading-m)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(window.FarFetchedDesignSystem_8aeaa1.Button, {
    variant: "secondary",
    size: "sm"
  }, "Export"), /*#__PURE__*/React.createElement(window.FarFetchedDesignSystem_8aeaa1.Button, {
    variant: "primary",
    size: "sm"
  }, "New deal")));
}
window.Topbar = Topbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/labs/Topbar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
