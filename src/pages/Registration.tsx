
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { User, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import AnimatedText from '@/components/AnimatedText';

// Define the form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  collegeName: z.string().min(2, { message: "College name is required" }),
  rollNo: z.string().min(1, { message: "Roll No is required" }),
  collegeEmail: z.string().email({ message: "Valid college email is required" }),
  personalEmail: z.string().email({ message: "Valid personal email is required" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }).max(15),
  department: z.string().min(1, { message: "Department is required" }),
  yearOfStudy: z.string().min(1, { message: "Year of study is required" }),
  events: z.array(z.string()).min(1, { message: "Select at least one event" }),
});

type FormValues = z.infer<typeof formSchema>;

const events = [
  "Paper and Poster",
  "MasterCAD",
  "CiviQuest",
  "Code Crack",
  "Load and Locate",
  "Master Builders",
  "Concrete Hands",
  "Scan & Plan",
  "Connections / Link N Build",
  "Kollywood Quiz / Bridge to Blockbuster",
  "Civilathon",
  "Cube Clash",
  "Structocon",
  "Reflex Debate",
  "Pillars and Pixels"
];

const Registration = () => {
  const [savedRegistrations, setSavedRegistrations] = useState<FormValues[]>([]);
  const [showSavedDialog, setShowSavedDialog] = useState(false);

  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      collegeName: '',
      rollNo: '',
      collegeEmail: '',
      personalEmail: '',
      phone: '',
      department: '',
      yearOfStudy: '',
      events: [],
    },
  });

  // Load saved registrations from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('registrations');
    if (savedData) {
      try {
        setSavedRegistrations(JSON.parse(savedData));
      } catch (e) {
        console.error('Error parsing saved registrations', e);
      }
    }
  }, []);

  const onSubmit = (data: FormValues) => {
    // Save the form data to localStorage
    const updatedRegistrations = [...savedRegistrations, data];
    localStorage.setItem('registrations', JSON.stringify(updatedRegistrations));
    setSavedRegistrations(updatedRegistrations);
    
    // Show success message
    toast.success('Registration saved successfully!', {
      description: 'Your registration has been saved locally.',
    });
    
    // Reset the form
    form.reset();
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <AnimatedText
          text="REGISTRATION"
          element="h1"
          className="section-heading text-center text-gradient mb-10"
          animation="blur-in"
          splitType="chars"
        />
        
        <div className="glass-panel p-8 mb-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="collegeName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>College Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your college name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="rollNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Roll No</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your roll number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="collegeEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>College Email ID</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="college@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="personalEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Personal Email ID</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="personal@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                          <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                          <SelectItem value="Electrical Engineering">Electrical Engineering</SelectItem>
                          <SelectItem value="Computer Science">Computer Science</SelectItem>
                          <SelectItem value="Information Technology">Information Technology</SelectItem>
                          <SelectItem value="Electronics">Electronics</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="yearOfStudy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year of Study</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="First Year">First Year</SelectItem>
                          <SelectItem value="Second Year">Second Year</SelectItem>
                          <SelectItem value="Third Year">Third Year</SelectItem>
                          <SelectItem value="Fourth Year">Fourth Year</SelectItem>
                          <SelectItem value="Fifth Year">Fifth Year</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div>
                <FormLabel className="block mb-3">Events Participating In</FormLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4 rounded-md bg-festival-darker/50">
                  {events.map((event) => (
                    <FormField
                      key={event}
                      control={form.control}
                      name="events"
                      render={({ field }) => (
                        <FormItem key={event} className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(event)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  field.onChange([...field.value, event]);
                                } else {
                                  field.onChange(
                                    field.value?.filter((value) => value !== event)
                                  );
                                }
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {event}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <FormMessage>
                  {form.formState.errors.events && form.formState.errors.events.message}
                </FormMessage>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  type="submit" 
                  className="button-primary w-full sm:w-auto flex-1" 
                  disabled={form.formState.isSubmitting}
                >
                  <User className="mr-2 h-4 w-4" />
                  Register
                </Button>
                
                <Button 
                  type="button" 
                  variant="outline" 
                  className="button-secondary w-full sm:w-auto flex-1"
                  onClick={() => setShowSavedDialog(true)}
                >
                  <Save className="mr-2 h-4 w-4" />
                  View Saved Registrations
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      
      {/* Dialog for showing saved registrations */}
      <Dialog open={showSavedDialog} onOpenChange={setShowSavedDialog}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Saved Registrations</DialogTitle>
            <DialogDescription>
              You have {savedRegistrations.length} saved registration{savedRegistrations.length !== 1 ? 's' : ''}.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {savedRegistrations.length === 0 ? (
              <p className="text-center text-muted-foreground py-4">No saved registrations found.</p>
            ) : (
              savedRegistrations.map((reg, index) => (
                <div key={index} className="glass-panel p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm font-medium">Name</p>
                      <p className="text-sm text-muted-foreground">{reg.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">College</p>
                      <p className="text-sm text-muted-foreground">{reg.collegeName}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">{reg.personalEmail}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">{reg.phone}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm font-medium">Events</p>
                      <p className="text-sm text-muted-foreground">{reg.events.join(', ')}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Registration;
