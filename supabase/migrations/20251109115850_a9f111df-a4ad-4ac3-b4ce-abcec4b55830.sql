-- Create admin_requests table
CREATE TABLE public.admin_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  reason TEXT,
  reviewed_by UUID REFERENCES auth.users(id),
  reviewed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.admin_requests ENABLE ROW LEVEL SECURITY;

-- Users can view their own requests
CREATE POLICY "Users can view their own admin requests"
ON public.admin_requests
FOR SELECT
USING (auth.uid() = user_id);

-- Users can create their own requests (only one pending request per user)
CREATE POLICY "Users can create admin requests"
ON public.admin_requests
FOR INSERT
WITH CHECK (auth.uid() = user_id AND status = 'pending');

-- Admins can view all requests
CREATE POLICY "Admins can view all admin requests"
ON public.admin_requests
FOR SELECT
USING (has_role(auth.uid(), 'admin'));

-- Admins can update requests
CREATE POLICY "Admins can update admin requests"
ON public.admin_requests
FOR UPDATE
USING (has_role(auth.uid(), 'admin'));