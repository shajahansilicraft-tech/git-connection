import { useState } from "react"
import Select, { type SingleValue, type StylesConfig } from "react-select"

type Option = {
  value: string
  label: string
}

const options: Option[] = [
  { value: "design", label: "Design" },
  { value: "engineering", label: "Engineering" },
  { value: "marketing", label: "Marketing" },
  { value: "operations", label: "Operations" },
  { value: "sales", label: "Sales" },
]

const selectStyles: StylesConfig<Option, false> = {
  control: (base, state) => ({
    ...base,
    minHeight: 48,
    borderRadius: 12,
    borderColor: state.isFocused ? "#6366f1" : "#d1d5db",
    boxShadow: state.isFocused ? "0 0 0 3px rgba(99, 102, 241, 0.14)" : "none",
    cursor: "pointer",
    transition: "border-color 150ms ease, box-shadow 150ms ease",
    "&:hover": {
      borderColor: state.isFocused ? "#6366f1" : "#9ca3af",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 14px",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#9ca3af",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: state.isFocused ? "#6366f1" : "#6b7280",
    paddingRight: 12,
    transition: "transform 150ms ease, color 150ms ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : undefined,
    "&:hover": {
      color: "#4f46e5",
    },
  }),
  menu: (base) => ({
    ...base,
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    boxShadow: "0 14px 32px rgba(15, 23, 42, 0.12)",
    overflow: "hidden",
    padding: 4,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  option: (base, state) => ({
    ...base,
    borderRadius: 8,
    color: state.isSelected ? "#4338ca" : "#374151",
    backgroundColor: state.isSelected
      ? "#eef2ff"
      : state.isFocused
        ? "#f9fafb"
        : "transparent",
    cursor: "pointer",
    padding: "10px 12px",
    fontWeight: state.isSelected ? 600 : 400,
    "&:active": {
      backgroundColor: "#eef2ff",
    },
  }),
}

export default function App() {
  const [department, setDepartment] = useState<Option | null>(null)

  const handleChange = (option: SingleValue<Option>) => {
    setDepartment(option)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-12 text-slate-900">
      <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-10">
        <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-slate-950 uppercase">
          Team setup
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-indigo-600">
          Choose your department
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Select the team that best matches your role.
        </p>

        <div className="mt-7">
          <label
            className="mb-2 block text-sm font-medium text-slate-700"
            htmlFor="department-select"
          >
            Department
          </label>
          <Select<Option>
            inputId="department-select"
            instanceId="department-select"
            options={options}
            value={department}
            onChange={handleChange}
            placeholder="Select a department..."
            isClearable
            styles={selectStyles}
            aria-label="Department"
          />
        </div>

        <div className="mt-6 min-h-6 text-sm text-slate-500" aria-live="polite">
          {department ? (
            <p>
              Selected:{" "}
              <span className="font-medium text-slate-800">
                {department.label}
              </span>
            </p>
          ) : (
            <p>No department selected</p>
          )}
        </div>
      </section>
    </main>
  )
}
